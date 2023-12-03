"use client";
import { createContext, useContext, useState, useEffect } from "react";
import data from "../../Data/data";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(data);
  const [cartItem, setCartItem] = useState([]);
  const [quantities, setQuantities] = useState({});

  const addItem = (product) => {
    setCartItem([...cartItem, product]);
  };

  const removeItem = (item) => {
    const removeFromCart = cartItem.filter((product) => product.id !== item.id);
    setCartItem(removeFromCart);
  };
  useEffect(() => {
    setProductData(productData);
  }, [productData]);

  const incrementQuantity = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: (prevQuantities[item] || 0) + 1,
    }));
  };

  const decrementQuantity = (item) => {
    if (quantities[item] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item]: prevQuantities[item] - 1,
      }));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    cartItem.forEach((item) => {
      total += (quantities[item.id] || 1) * item.price;
    });
    return total;
  };

  return (
    <productContext.Provider
      value={{
        productData,
        addItem,
        cartItem,
        removeItem,
        quantities,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
const useProduct = () => useContext(productContext);
export { useProduct, ProductProvider };
