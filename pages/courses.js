import CourseList from "../components/CourseList";
import Layout from "../components/Layout";

const Courses = ({ courses, cart }) => {
  return (
    <Layout cart={cart} page="Courses">
      <main className="container">
        <h1 className="heading">Our courses</h1>
        <CourseList courses={courses} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/courses?_sort=price:asc`;
  const response = await fetch(url);
  const courses = await response.json();

  return {
    props: {
      courses,
    },
  };
}

export default Courses;
