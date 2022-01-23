import Image from "next/image";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers/utils";
import styles from "../../styles/Course.module.css";
import ReactMarkdown from "react-markdown";

const Course = ({ course }) => {
  const { description, image, price, published_at, title } = course;
  return (
    <Layout page={title}>
      <main className="container">
        <h1 className="heading">{title}</h1>
        <article className={styles.entry}>
          <Image
            layout="responsive"
            src={image.url}
            alt={`imagen blog ${title}`}
            width={800}
            height={600}
          />
          <div className={styles.content}>
            <p suppressHydrationWarning className={styles.date}>
              {formatDate(published_at)}
            </p>
            <div className={styles.contentBody}>
              <ReactMarkdown linkTarget="_blank">{description}</ReactMarkdown>
            </div>
            <p>${price}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

// This one checks what is going to build (consultar)
export async function getStaticPaths() {
  const url = `${process.env.API_URL}/courses/`;
  const response = await fetch(url);
  const courses = await response.json();

  const paths = courses.map((course) => ({
    params: { url: course.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

// This one actually builds everything (retornar parametros)
export async function getStaticProps({ params: { url } }) {
  const urlCourse = `${process.env.API_URL}/courses?url=${url}`;
  const response = await fetch(urlCourse);
  const course = await response.json();

  return {
    props: {
      course: course[0],
    },
  };
}

export default Course;
