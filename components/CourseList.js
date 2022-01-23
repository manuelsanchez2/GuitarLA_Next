import styles from "../styles/CourseList.module.css";
import Course from "./Course";

const CourseList = ({ courses }) => {
  return (
    <div className={styles.list}>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
