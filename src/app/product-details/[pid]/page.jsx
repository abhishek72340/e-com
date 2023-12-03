"use client";
import { useRouter } from "next/navigation";
import { useProduct } from "../../../context/product-context";
const Product = ({ params: { pid } }) => {
  const { productData, addItem, cartItem } = useProduct();

  const router = useRouter();
  const productDetails = productData.products.find(
    (item) => item.id === Number(pid)
  );
  return (
    <div className="flex justify-center  items-center gap-[7rem] m-20">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-lg p-4 mb-4 bg-white m-10">
        <img
          src={productDetails.image}
          alt="image"
          className="w-full h-auto "
        />
      </div>
      <div>
        <p className=" font-semibold text-2xl"> Name: {productDetails.title}</p>
        <p className=" font-semibold text-2xl">
          Price: {productDetails.price}$
        </p>
        <p>Rating: {productDetails.rating}</p>
        <p>Type: {productDetails.type}</p>
        <p>Stock: {productDetails.stock}</p>

        {cartItem.find((item) => item.id === productDetails.id) ? (
          <button
            className="bg-red-500 text-white w-[10vw]"
            onClick={() => router.push("/cart")}
          >
            Go To cart
          </button>
        ) : (
          <button
            className="bg-red-500 text-white w-[10vw]"
            onClick={() => addItem(productDetails)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default Product;
