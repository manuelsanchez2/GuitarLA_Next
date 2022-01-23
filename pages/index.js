import Layout from "../components/Layout";
import GuitarList from "../components/GuitarList";
import SectionCourse from "../components/SectionCourse";
import BlogList from "../components/BlogList";

export default function Home({ guitars, course, entries }) {
  return (
    <Layout page="Inicio" guitar={guitars[3]}>
      <main className="container">
        <h1 className="heading">Nuestra coleccion</h1>
        <GuitarList guitars={guitars} />
      </main>
      <SectionCourse course={course} />
      <section className="container">
        <BlogList entries={entries} />
      </section>
    </Layout>
  );
}

// In this case we have to make several requests in the same page / Promise all
export async function getServerSideProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?_sort=price:asc`;
  const urlCourse = `${process.env.API_URL}/section-courses`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitars, resCourse, resBlog] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCourse),
    fetch(urlBlog),
  ]);
  const [guitars, course, entries] = await Promise.all([
    resGuitars.json(),
    resCourse.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      guitars,
      course,
      entries,
    },
  };
}
