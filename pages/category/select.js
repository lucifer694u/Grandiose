import React from "react";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/client";
import CategoryProd from "@/components/CategoryProd";
import Footer from "@/components/Footer";

function Select({ category }) {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-6xl font-Cursive mb-6 text-center text-gray-800">
            Explore Luxury Brands
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
            {category?.map((prod) => (
              <CategoryProd data={prod} key={prod.id} />
            ))}
          </div>
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
