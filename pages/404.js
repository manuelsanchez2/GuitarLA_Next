import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/NoFound.module.css";

const NoFound = ({ cart }) => {
  return (
    <Layout cart={cart} page="Not found">
      <div className={styles.noFound}>
        <h1 className="heading">Page Not Found</h1>
        <Link href="/">Back to Home</Link>
      </div>
    </Layout>
  );
};

export default NoFound;
