import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

const Product = ({ products }) => {
  const search = products.category[0];
  return (
    <div className="text-center mb-[200px]">
      <h1 className="mx-auto md:text-8xl text-5xl gap-10  font-Cursive ">
        Explore Rolex
      </h1>

      <div className="text-black grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 ">
        {search?.prod.map((watch) => (
          <div key={watch._id}>
            <Link href={`/product/${watch.name}`}>
              <img
                src={urlFor(watch.image).url()}
                alt=""
                className="w-[400px] h-[600px] mx-auto"
              />
              <h1 className="font-kanit text-[8px] tracking-[2px] font-extrabold uppercase text-[10px]">
                {watch.name}
              </h1>
            </Link>
          </div>
        ))}

        {/* <h1>{products.category[0].title}</h1> */}
      </div>
    </div>
  );
};

export default Product;
