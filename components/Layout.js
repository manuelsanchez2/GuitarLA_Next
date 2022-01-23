import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, page, guitar }) => {
  return (
    <div>
      <Head>
        <title>Guitar LA - {page}</title>
        <meta name="description" content="Sitio web de guitarras" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header guitar={guitar} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitar: null,
};

export default Layout;
