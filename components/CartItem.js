import React from "react";
import { urlFor } from "@/lib/client";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "@/slices/basketSlice";

function CartItem({ item, id }) {
  const p = item.p;

  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    // <div className="m-auto flex flex-col gap-2  p-4 rounded-sm shadow-sm bg-white/[0.6] mb-2 max-w-xl">
    <div className="flex  items-center flex-wrap gap-2 w-full">
      <div className="flex flex-wrap xs:flex-nowrap justify-center xs:justify-start flex-1 items-center gap-5">
        <div className=" bg-black/[0.075] h-28 w-28 rounded-md flex items-center ">
          <img
            src={urlFor(p.image).url()}
            alt=""
            className="object-fit w-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl py-3 font-semibold">{p.name}</h2>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center"></div>
            <div className="flex gap-1 sm:gap-3  ">
              <button
                onClick={removeItemFromBasket}
                className="btn-rounded-secondary  text-xs sm:text-sm mt-2 max-w-xs disabled:cursor-not-allowed"
              >
                Remove from Bag
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-md  text-gray-600">₹ {p.price}</span>
      </div>
    </div>
    // </div>
  );
}

export default CartItem;
