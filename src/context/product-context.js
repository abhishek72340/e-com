"use client";

import { createContext, useContext, useState, useEffect } from "react";
import data from "../../Data/data";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  // state
  const [productData, setProductData] = useState(data);
  const [cartItem, setCartItem] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [myOrder, setMyOrder] = useState([]);

  // add to cart function
  const addItem = (product) => {
    setCartItem([...cartItem, product]);
  };

  // remove from cart function
  const removeItem = (item) => {
    const removeFromCart = cartItem.filter((product) => product.id !== item.id);
    setCartItem(removeFromCart);
  };

  // render products
  useEffect(() => {
    setProductData(productData);
  }, [productData]);

  // increment product quantity
  const incrementQuantity = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: (prevQuantities[item] || 0) + 1,
    }));
  };

  // decrement product quantity
  const decrementQuantity = (item) => {
    if (quantities[item] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item]: prevQuantities[item] - 1,
      }));
    }
  };

  // calculate total price function
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
        myOrder,
        setMyOrder,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
const useProduct = () => useContext(productContext);
export { useProduct, ProductProvider };
