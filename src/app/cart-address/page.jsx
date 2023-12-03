"use client";
import { useState } from "react";
const CartAddress = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const addressSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-100 p-4 mt-[7rem]">
      <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
      <form onSubmit={addressSubmitHandler}>
        <label className="block mb-2">
          Street:
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          City:
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          Zip Code:
          <input
            type="text"
            name="zipCode"
            value={address.zipCode}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </label>
        <button className="bg-red-500 w-40 h-10 text-white">
          <input type="submit" value="add address" />
        </button>
      </form>
    </div>
  );
};

export default CartAddress;
