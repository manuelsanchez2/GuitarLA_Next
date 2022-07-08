import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Cart.module.css";

const Cart = ({ cart, updateQuantity, deleteProduct }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalCalculation = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotal(totalCalculation);
  }, [cart]);

  return (
    <Layout cart={cart} page="Cart">
      <h1 className="heading">Cart</h1>
      <main className={`${styles.content} container`}>
        <div className={styles.cart}>
          <h2>Items</h2>
          {cart.length === 0
            ? "There are no items in your cart"
            : cart.map((product) => (
                <div className={styles.product} key={product._id}>
                  <div>
                    <Image
                      layout="responsive"
                      height={400}
                      width={200}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div>
                    <p className={styles.name}>{product.name}</p>
                    <div className={styles.quantity}>
                      <p>Amount:</p>
                      <select
                        className={styles.select}
                        value={product.quantity}
                        onChange={(e) =>
                          updateQuantity({
                            quantity: e.target.value,
                            id: product._id,
                          })
                        }
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>

                    <p className={styles.price}>
                      <span>${product.price}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $<span>{product.price * product.quantity}</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.deleteBtn}
                    onClick={() => deleteProduct(product._id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.summary}>
          <h2>Order Summary</h2>
          {total > 0 ? (
            <>
              <p>This is the order summary</p>
              <p>Total: ${total}</p>
            </>
          ) : (
            <p>There are no products in the basket yet</p>
          )}
          <button>PAY NOW</button>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
