import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Course.module.css";

const Course = ({ course }) => {
  const { description, name, image, price, url, isFav } = course;
  return (
    <div className={styles.course}>
      <Image
        priority="true"
        layout="responsive"
        width={800}
        height={600}
        src={image.url}
        alt={`imagen curso ${name}`}
      />
      <div className={styles.content}>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
        {isFav === true && <span className={styles.top}>best seller</span>}
        <p className={styles.price}>${price}</p>
        <Link href={`/courses/${url}`}>
          <a className={styles.link}>Ver curso</a>
        </Link>
      </div>
    </div>
  );
};

export default Course;
