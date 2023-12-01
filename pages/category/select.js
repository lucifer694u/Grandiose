import React from "react";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/client";
import { urlFor } from "@/lib/client";
import CategoryProd from "@/components/CategoryProd";
import Footer from "@/components/Footer";

function Select({ category }) {
  const p = category[0];
  return (
    <>
      <div className="h-screen p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14 px-5 md:px-0">
          {category?.map((prod) => (
            <CategoryProd data={prod} key={prod.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Select;
export const getServerSideProps = async () => {
  const query = groq`*[_type=="category"]`;
  const category = await sanityClient.fetch(query);

  return {
    props: {
      category,
    },
  };
};
