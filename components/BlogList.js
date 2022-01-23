import BlogEntry from "./BlogEntry";
import styles from "../styles/Blog.module.css";

const BlogList = ({ entries }) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {entries.map((entry) => (
          <BlogEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
