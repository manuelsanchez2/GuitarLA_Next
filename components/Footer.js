import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.nav}>
          <Link href="/">Inicio</Link>
          <Link href="/about-us">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/shop">Tienda</Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
