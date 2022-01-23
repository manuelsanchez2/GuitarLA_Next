// import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers/utils";
import styles from "../../styles/BlogEntry.module.css";
import ReactMarkdown from "react-markdown";

const DynamicBlogEntry = ({ entry }) => {
  const { content, image, published_at, title, id } = entry;
  // This checks and reads the url
  //   const router = useRouter();
  //   console.log(router.query);
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
              <ReactMarkdown linkTarget="_blank">{content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
};

// This one checks what is going to build (consultar)
export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs/`;
  const response = await fetch(url);
  const entries = await response.json();

  const paths = entries.map((entry) => ({
    params: { url: entry.url },
  }));

  // console.log(paths);

  return {
    paths,
    // True for bigger projects, only checks and will build some but not all entries
    // false for smaller projects where the amount of data is not massive
    fallback: false,
  };
}

// This one actually builds everything (retornar parametros)
export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const response = await fetch(urlBlog);
  const entry = await response.json();

  return {
    props: {
      entry: entry[0],
    },
  };
}

// This is not good for static content
// export async function getServerSideProps({ query: { id } }) {
//   const url = `${process.env.API_URL}/blogs/${id}`;
//   const response = await fetch(url);
//   const entry = await response.json();

//   console.log(entry);

//   return {
//     props: {
//       entry,
//     },
//   };
// }

export default DynamicBlogEntry;
