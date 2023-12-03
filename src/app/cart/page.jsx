"use client";
import { useState } from "react";
import { useProduct } from "../../../src/context/product-context";
import Checkout from "../../../src/components/Checkout";
const Cart = () => {
  const {
    cartItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    quantities,
  } = useProduct();

  return (
    <div className="flex flex-row">
      <div>
        {cartItem.map((item) => {
          return (
            <div key={item.id}>
              <button
                className="text-center mt-[10rem] ml-[29rem] absolute font-bold text-2xl text-red-500 "
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </button>
              <p className="text-center mt-[10rem] ml-[25rem] absolute font-bold">
                qnt:{quantities[item.id] || 1}
              </p>
              <button
                className="text-center mt-[10rem] ml-[22rem] absolute font-bold text-2xl text-red-500 "
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </button>
              <div
                key={item.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-lg p-4 mb-4 bg-white m-20"
              >
                <img src={item.image} alt="image" className="w-full h-auto " />

                <div className="mt-2">
                  <p className="text-center font-semibold"> {item.title}</p>
                  <p className="font-semibold"> ${item.price}</p>
                  <button
                    className="bg-red-500 text-white w-40"
                    onClick={() => removeItem(item)}
                  >
                    delete from Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Checkout />
    </div>
  );
};

export default Cart;
