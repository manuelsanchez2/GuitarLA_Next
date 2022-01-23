import GuitarList from "../components/GuitarList";
import Layout from "../components/Layout";

const Shop = ({ guitars }) => {
  return (
    <Layout page="Shop">
      <main className="container">
        <h1 className="heading">Nuestra colección</h1>
        <GuitarList guitars={guitars} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitars?_sort=price:asc`;
  const response = await fetch(url);
  const guitars = await response.json();

  return {
    props: {
      guitars,
    },
  };
}

export default Shop;
