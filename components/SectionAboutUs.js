import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from "../styles/AboutUs.module.css";

const SectionAboutUs = ({ aboutus }) => {
  const { content, image, isImageLeft } = aboutus;
  return (
    <section className={styles.content}>
      <div className={isImageLeft ? styles.reverse : ""}>
        <ReactMarkdown linkTarget="_blank">{content}</ReactMarkdown>
      </div>
      <Image
        priority="true"
        layout="responsive"
        width={600}
        height={450}
        alt="about us"
        src={image.url}
      />
    </section>
  );
};

export default SectionAboutUs;
