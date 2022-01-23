import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = ({ guitar }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_inner}>
          <Link href="/">
            <a>
              <Image src="/img/logo.svg" alt="logo" width={400} height={100} />
            </a>
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Inicio</Link>
            <Link href="/about-us">Nosotros</Link>
            <Link href="/courses">Cursos</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/shop">Tienda</Link>
          </nav>
        </div>

        {guitar && (
          <div className={styles.model}>
            <h2>{guitar.name}</h2>
            <p className={styles.description}>{guitar.description}</p>
            <p className={styles.price}>${guitar.price}</p>
            <Link href={`/guitars/${guitar.url}`}>
              <a className={styles.link}>Ver producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === "/" && (
        <div className={styles.guitar}>
          <Image
            layout="fixed"
            width={500}
            height={1200}
            src="/img/header_guitarra.png"
            alt="guitarra"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
