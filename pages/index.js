import Header from "@/components/Header";
import React from "react";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
// import Hero from '@/components/Hero'
import { groq } from "next-sanity";

import Herobanner from "@/components/Herobanner";
import About from "@/components/About";
import Product from "@/components/Product";
import Trending from "@/components/Trending";
import { sanityClient } from "@/lib/client";

const index = (category) => {
  return (
    <div className="h-screen  scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-[#F7AB0A]/80">
      <section id="/">
        <Carousel />
      </section>

      <section id="about">
        <About />
      </section>

   

      <section id="product">
        <Product products={category} />
      </section>

      <section id="trending">
        <Trending />
      </section>
      <Footer />
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = groq`*[title=="ROLEX"]{
    prod[]->,
  }`;
  const category = await sanityClient.fetch(query);

  return {
    props: {
      category,
    },
  };
};

export default index;
