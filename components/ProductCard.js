import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

function ProductCard({ data }) {
  const p = data;
  return (
    <div>
      <Link
        href={`/product/${p.name}`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img
          src={urlFor(p.image).url()}
          alt={p.name}
          className="h-[300px] mx-auto"
        />

        <div className="p-4 text-black/[0.9]  text-center ">
          <h2 className=" font-kanit tracking-[2px] text-sm font-bold">
            {p.name}
          </h2>
          <div className="flex items-center text-black/[0.5]">
            {/* <p className="mr-2 text-lg font-semibold">&#8377;{p.price}</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
