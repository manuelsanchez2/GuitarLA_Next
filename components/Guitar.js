import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitar.module.css";

const Guitar = ({ guitar }) => {
  const { description, name, image, price, url } = guitar;
  return (
    <div className={styles.guitar}>
      <Image
        priority="true"
        layout="responsive"
        width={180}
        height={350}
        src={image.url}
        alt={`imagen guitarra ${name}`}
      />
      <div className={styles.content}>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`/guitars/${url}`}>
          <a className={styles.link}>Ver guitarra</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
