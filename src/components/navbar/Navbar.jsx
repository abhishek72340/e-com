"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { useProduct } from "../../../src/context/product-context";
const Navbar = () => {
  const { cartItem } = useProduct();
  return (
    <div className="bg-green-300 h-20 fixed top-0 w-full opacity-[0.7]">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-20 h-20 " />
      </Link>
    </div>
  );
};

export default Navbar;
