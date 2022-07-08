import styles from "../styles/Blog.module.css";
import BlogEntry from "./BlogEntry";

const BlogList = ({ entries }) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className={styles.blog}>
        {entries.map((entry) => (
          <BlogEntry key={entry._id} entry={entry} />
        ))}
      </div>
    </>
  );
};

export default BlogList;
