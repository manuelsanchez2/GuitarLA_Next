import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, page, guitar, cart }) => {
  return (
    <div>
      <Head>
        <title>Guitar LA - {page}</title>
        <meta name="description" content="Sitio web de guitarras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cart={cart} guitar={guitar} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitar: null,
};

export default Layout;
