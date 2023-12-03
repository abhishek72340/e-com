import React from "react";
import { useProduct } from "../../context/product-context";

const CheckoutDetail = () => {
  const { calculateTotal } = useProduct();
  return (
    <div>
      <div className="w-[25vw] h-[60vh] border border-red-600 flex justify-end  m-[7rem]  ">
        <div className="flex flex-col gap-[2rem] mr-[rem] m-10">
          <p className="text-2xl text-red-500 underline">Payment Details</p>
          <div>Subtotal:- ${calculateTotal()}</div>
          <div>Discount:- 0</div>
          <div>Total:-${calculateTotal()}</div>
          <button className="bg-red-500 text-white w-60 h-10 mt-5">
            place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetail;
