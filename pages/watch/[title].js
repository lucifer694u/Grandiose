import React from "react";
import { groq } from "next-sanity";
import { sanityClient } from "@/lib/client";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
// import HeroBanner from "@/components/Herobanner";

function CategoryProducts({ category }) {
  return (
    <>
      <div className="mb-[100px]">
        {/* <h1 className="text-center font-kanit tracking-[15px] mt-10 py-5 text-[50px] font-bold">{category[0].title}</h1> */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[50px] mb-5  font-Cursive leading-tight">
            Watches tell time and <br></br> Time tells the story of our lives.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10  px-5 md:px-0">
          {category[0].prod?.map((prod) => (
            <ProductCard data={prod} key={prod.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CategoryProducts;

export const getServerSideProps = async ({ params: { title } }) => {
  const query = groq`*[title=='${title}']{
    ...,
    prod[]->,
  }`;
  const category = await sanityClient.fetch(query);

  return {
    props: {
      category,
    },
  };
};
