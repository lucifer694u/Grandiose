import React from "react";
import { urlFor } from "@/lib/client";
import Link from "next/link";

function CategoryProd({ data }) {
  return (
    <div>
      <div >
        {" "}
        <Link
          href={`/watch/${data.title}`}
          className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
          <img src={urlFor(data.image).url()} alt="" className="h-[100px] " />
        </Link>
      </div>

      <h1>{data.title}</h1>
    </div>
  );
}

export default CategoryProd;
