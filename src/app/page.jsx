"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProduct } from "../../src/context/product-context";
const page = () => {
  const { productData, addItem, cartItem } = useProduct();
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-center mx-auto p-10 ">
      {productData.products.map((items) => {
        return (
          <div
            key={items.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-lg p-4 mb-4 bg-white m-10"
          >
            <Link href={`/product-details/${items.id}`}>
              {" "}
              <img src={items.image} alt="image" className="w-full h-auto " />
            </Link>

            <div className="mt-2">
              <p className="text-center font-semibold"> {items.title}</p>
              <p className="mt-3">Price: {items.price}$</p>
              {cartItem.find((item) => item.id === items.id) ? (
                <button
                  className="bg-red-500 text-white w-40"
                  onClick={() => router.push("/cart")}
                >
                  Go to cart
                </button>
              ) : (
                <button
                  className="bg-red-500 text-white w-40"
                  onClick={() => addItem(items)}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
