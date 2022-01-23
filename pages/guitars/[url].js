import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitar.module.css";

const DynamicGuitarPage = ({ guitar }) => {
  const { description, name, image, price } = guitar[0];
  return (
    <Layout page={`Guitar ${name}`}>
      <div className={`${styles.guitar} ${styles.guitarSpace}`}>
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
          <p>{description}</p>
          <p className={styles.price}>${price}</p>

          <form className={styles.form}>
            <label>Cantidad:</label>
            <select>
              <option value="">-- Seleccione un valor --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitar = `${process.env.API_URL}/guitars?url=${url}`;
  const response = await fetch(urlGuitar);
  const guitar = await response.json();

  return {
    props: {
      guitar,
    },
  };
}

export default DynamicGuitarPage;
