import React from "react";
import { useRouter } from "next/navigation";
import { useProduct } from "../context/product-context";
const Checkout = () => {
  const {
    cartItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    quantities,
    calculateTotal,
  } = useProduct();

  const router = useRouter();
  return (
    <div className="w-[25vw] h-[60vh] border border-red-600 flex justify-end fixed right-0 m-[6rem]  ">
      <div className="flex flex-col gap-[2rem] mr-[rem] m-10">
        <p className="text-2xl text-red-500 underline">Payment Detail</p>
        <div>Subtotal:- ${calculateTotal()}</div>
        <div>Discount:- 0</div>
        <button
          className="bg-red-500 text-white w-60 h-10 mt-5"
          onClick={() => router.push("/cart-address")}
        >
          proceed to pay
        </button>
      </div>
      <div className="absolute bottom-[7rem] mr-[12rem] text-red-500">
        Total:-${calculateTotal()}
      </div>
    </div>
  );
};

export default Checkout;
