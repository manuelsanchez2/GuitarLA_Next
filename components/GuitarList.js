import styles from "../styles/GuitarList.module.css";
import Guitar from "./Guitar";

const GuitarList = ({ guitars }) => {
  return (
    <div className={styles.list}>
      {guitars.map((guitar) => (
        <Guitar key={guitar._id} guitar={guitar} />
      ))}
    </div>
  );
};

export default GuitarList;
