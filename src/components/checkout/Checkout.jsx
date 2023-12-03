"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProduct } from "../../context/product-context";
const Checkout = () => {
  const { cartItem, calculateTotal, setMyOrder, setCartItem } = useProduct();
  const router = useRouter();
  //RAZOR-PAY//
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    if (!cartItem.length) {
      router.push("/");
    }
    return () => {
      document.body.removeChild(script);
    };
  }, [router, cartItem.length]);

  // Handle Payment Success//
  const handlePaymentSuccess = (payment) => {
    cartItem.map((product) =>
      setMyOrder((prev) => [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          txNum: payment.razorpay_payment_id,
          dateOfPurchase: new Date().toDateString(),
        },
      ])
    );
    router.push("/order");
    window.scrollTo({ top: 0, scroll: "instant" });
  };

  const handlePaymentError = (error) => {
    alert("Payment Error:", error);
  };

  // Click On PlaceOrder for payment//
  const makePayment = async () => {
    if (!cartItem.length) {
      alert("please select address");
      return;
    }

    // call function for total amount
    const totalAmount = calculateTotal();

    //Razor-Pay Integrate//
    const options = {
      key: "rzp_test_XAo7wMYEo0HyyC",
      amount: totalAmount * 82 * 100 + 410,
      currency: "INR",
      name: "DIl Food",
      description: "Thank you for your test purchase",
      image: "",
      handler: handlePaymentSuccess,
      theme: {
        color: "#0e5db3",
      },
    };

    //Razor-Pay Failed Payment Handled//
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.on("payment.failed", handlePaymentError);
    razorpayInstance.open();
  };

  return (
    <div>
      <div className=" w-[40vw] h-[60vh] border border-red-500 flex justify-end fixed right-0 m-[6rem]  ">
        <div className="mt-10">
          {" "}
          <h3 className="text-2xl text-red-500 underline">Product</h3>
          {cartItem.map((item) => {
            return (
              <div key={item.id}>
                <li className="text-lg ">{item.title}</li>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[2rem] mr-[rem] m-10">
          <p className="text-2xl text-red-500 underline">Payment Detail</p>
          <div>Subtotal:- ${calculateTotal()}</div>
          <div>Discount:- $0</div>

          <button
            className="bg-red-500 text-white w-60 h-10 mt-5"
            onClick={makePayment}
          >
            place order
          </button>
        </div>
        <div className="absolute bottom-[7rem] mr-[12rem] text-red-500">
          Total:-${calculateTotal()}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
