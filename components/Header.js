import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = ({ guitar, cart }) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const router = useRouter();

  // Version without react
  // Check the total amount of items in the cart
  // if (cart.length > 0) {
  //   let totalProducts = 0;
  //   cart.forEach((product) => {
  //     totalProducts += product.quantity;
  //   });
  // }
  useEffect(() => {
    if (cart.length > 0) {
      totalProducts = 0;
      cart.forEach((product) => {
        totalProducts += product.quantity;
      });
      setTotalProducts(totalProducts);
    }
  }, [cart]);

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
            <Link href="/">HOME</Link>
            <Link href="/about-us">About</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/cart">
              <a className={styles.cart}>
                <Image
                  layout="fixed"
                  src="/img/carrito.png"
                  alt="cart"
                  height={25}
                  width={30}
                />
                {cart.length > 0 ? <span>{totalProducts}</span> : ""}
              </a>
            </Link>
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
