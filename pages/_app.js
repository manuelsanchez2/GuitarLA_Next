import { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/normalize.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCart(cartLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (cart.some((article) => article._id === product._id)) {
      // Update article with new value
      const updatedCart = cart.map((article) => {
        if (article._id === product._id) {
          article.quantity = product.quantity;
        }
        return article;
      });
      setCart(updatedCart);
    } else {
      // Add new article to cart
      setCart([...cart, product]);
    }
  };

  const deleteProduct = (id) => {
    const updatedCart = cart.filter((article) => article._id !== id);
    setCart(updatedCart);
  };

  const updateQuantity = (product) => {
    // Update quantity of existing article or delete if select is 0
    if (product.quantity === "0") {
      deleteProduct(product._id);
    } else {
      const updatedCart = cart.map((article) => {
        if (article._id === product._id) {
          article.quantity = parseInt(product.quantity);
        }
        return article;
      });
      setCart(updatedCart);
    }
  };

  return (
    <Component
      {...pageProps}
      cart={cart}
      addToCart={addToCart}
      updateQuantity={updateQuantity}
      deleteProduct={deleteProduct}
    />
  );
}

export default MyApp;
