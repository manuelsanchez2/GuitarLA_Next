import Layout from "../components/Layout";
import SectionAboutUs from "../components/SectionAboutUs";

const AboutUs = ({ aboutus }) => {
  return (
    <Layout page="About Us">
      <main className="container">
        <h1 className="heading">About us</h1>
        <SectionAboutUs aboutus={aboutus} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const urlAbout = `${process.env.API_URL}/section-about-us`;
  const response = await fetch(urlAbout);
  const aboutus = await response.json();

  return {
    props: {
      aboutus,
    },
  };
}

export default AboutUs;
