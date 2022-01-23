import Link from "next/link";
import styles from "../styles/SectionCourse.module.css";

const SectionCourse = ({ course }) => {
  const { title, content, image } = course;
  return (
    <section>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className="heading">{title}</h2>
          <p className={styles.text}>{content}</p>
          <Link href="/courses">
            <a className={styles.link}>Ver cursos</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        section {
          padding: 10rem 0;
          margin-top: 10rem;
          color: var(--white);
          background-size: cover;
          background-position: center;
          background-image: linear-gradient(
              to right,
              rgb(0, 0, 0, 0.65),
              rgb(0, 0, 0, 0.65)
            ),
            url(${image.url});
        }
      `}</style>
    </section>
  );
};

export default SectionCourse;
