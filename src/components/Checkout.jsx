import React from "react";
import { useProduct } from "../../../dil-food/src/context/product-context";
const Checkout = () => {
  const {
    cartItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    quantities,
  } = useProduct();
  const subTotal = cartItem.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="w-[25vw] h-[60vh] border border-red-600 flex justify-end fixed right-0 m-[6rem]  ">
      <div className="flex flex-col gap-[4rem] mr-[rem] m-10">
        <div>Subtotal:- {subTotal || 0}</div>
        <div>Discount:- 0</div>
        <button className="bg-red-500 text-white w-60 h-10 mt-5">
          place order
        </button>
      </div>
      <div className="absolute bottom-[8rem] mr-[13.7rem]">
        Total:-{subTotal || 0}
      </div>
    </div>
  );
};

export default Checkout;
