import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/NoFound.module.css";

const NoFound = () => {
  return (
    <Layout>
      <div className={styles.noFound}>
        <h1 className="heading">Página no encontrada</h1>
        <Link href="/">Volver al inicio</Link>
      </div>
    </Layout>
  );
};

export default NoFound;
