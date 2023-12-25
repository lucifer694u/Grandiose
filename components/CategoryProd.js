import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

function CategoryProd({ data }) {
  return (
    <div className="p-5 rounded-md shadow-lg bg-white min-h-[385px] flex flex-col justify-center items-center transition-transform duration-300 transform hover:scale-105">
      <Link href={`/watch/${data.title}`}>
        <div className="flex items-center justify-center rounded-md overflow-hidden hover:shadow-xl cursor-pointer">
          <img
            src={urlFor(data.image).url()}
            alt=""
            className="h-4/6 w-4/6 object-cover rounded-md"
          />
        </div>
      </Link>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{data.title}</h2>
        {/* Additional details or description can be added here */}
      </div>
    </div>
  );
}

export default CategoryProd;
