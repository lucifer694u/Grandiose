import React from "react";

import Link from "next/link";
import CartItem from "@/components/CartItem";
import { createContext } from "react";
import { useState } from "react";

// ! creating context
// export const CartContext = createContext();

const cartitem = ({ cart }) => {
  return (
    <div className="w-full md:py-20">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        {/* This is empty screen */}

        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <img
            src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0= "
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cartitem;
