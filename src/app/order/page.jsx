"use client";
import { useProduct } from "../../context/product-context";
const Order = () => {
  const { myOrder, calculateTotal } = useProduct();
  return (
    <div>
      {myOrder.length ? (
        <h2 className="text-center text-2xl font-bold mt-20">Order Summary</h2>
      ) : null}

      {myOrder.length ? (
        myOrder.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center m-10 flex-col h-[100vh] text-red-500 text-2xl"
            >
              <h3>Transaction Id:-{item.txNum}</h3>
              <h3>Product:-{item.title}</h3>
              <h3>Price:-{item.price}</h3>
              <h3>Date:-{item.dateOfPurchase}</h3>
            </div>
          );
        })
      ) : (
        <div className="text-center mt-20 text-red-500 text-3xl font-bold">
          Nothing
        </div>
      )}
    </div>
  );
};

export default Order;
