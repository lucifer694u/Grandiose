import React from "react";

import Link from "next/link";
import CartItem from "@/components/CartItem";
import { createContext } from "react";
import { useState } from "react";
import { selectItems } from "@/slices/basketSlice";
import { selectTotal } from "@/slices/basketSlice";
import CurrencyFormat from "react-currency-format";

import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

// ! creating context
// export const CartContext = createContext();

const cartitem = ({ cart }) => {
  const items = useSelector(selectItems);
  const p = items[0];
  console.log();
  const total = useSelector(selectTotal);

  const { data: session, status } = useSession();

  return (
    <div className="py-2 px-10">
      {items.length > 0 && (
        <h1 className="text-2xl font-bold p-3 mt-20 text-5xl mb-10 flex justify-center  ">
          Shopping Bag
        </h1>
      )}
      {/* <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto"> */}
      {/* This is empty screen */}
      {items.length == 0 ? (
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
      ) : (
        <div className="md:grid md:grid-cols-3 gap-5 ">
          <main className="md:col-span-2">
            {items.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
          </main>

          <div className="flex flex-col bg-white p-10 shadow-md">
            {items.length > 0 && (
              <>
                <h1 className="text-xl">Price Details</h1>
                <div className=" flex  justify-between  ">
                  <p className=" text-gray-600 flex-1">({items.length}) item</p>

                  <p className="text-lg">
                    {" "}
                    <h1>{total}</h1>
                  </p>
                </div>
                <h2 className="whitespace-nowrap">
                  Subtotal: ({items.length} item):
                  <span className="font-bold"></span>
                  <hr />
                  <div className="flex justify-between items-center">
                    <p className=" text-gray-600">Total</p>
                    <p className="text-2xl">₹ {total}</p>
                  </div>
                </h2>
                <button
                  disabled={!session}
                  className={`button py-2 px-4 rounded mt-2 text-black ${
                    !session && "bg-gray-400 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {!session ? "Sign in to checkout" : "proceed to checkout"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default cartitem;
