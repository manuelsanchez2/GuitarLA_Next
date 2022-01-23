import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../helpers/utils.js";
import styles from "../styles/BlogEntry.module.css";

const BlogEntry = ({ entry }) => {
  const { title, summary, image, published_at, url } = entry;

  return (
    <article>
      <Image
        priority="true"
        layout="responsive"
        src={image.url}
        alt={`imagen blog ${title}`}
        width={800}
        height={600}
      />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p suppressHydrationWarning className={styles.date}>
          {formatDate(published_at)}
        </p>
        <p className={styles.summary}>{summary}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.link}>Ver entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default BlogEntry;
