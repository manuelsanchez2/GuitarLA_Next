import BlogList from "../components/BlogList";
import Layout from "../components/Layout";

const Blog = ({ entries, cart }) => {
  // React way of handling api
  // useEffect(() => {
  //   const checkApi = async () => {
  //     const url = "http://localhost:1337/blogs/";
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     console.log(result);
  //   };
  //   checkApi();
  // }, []);

  // Next.js offers other ways of handling API, we are selecting getServerSiderProps and not Static Props (because in our case the info might change in every request, like this project or a delivery service)

  return (
    <Layout cart={cart} page="Blog">
      <main className="container">
        <BlogList entries={entries} />
      </main>
    </Layout>
  );
};

// This export makes this function available inside the component
// With this we can get rid of useEffect
// We do not need to call this function in the component, it works automatically
export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const response = await fetch(url);
  const entries = await response.json();

  return {
    props: {
      entries,
    },
  };
}

export default Blog;
