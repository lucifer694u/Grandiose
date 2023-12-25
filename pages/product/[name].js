import React from "react";
// import ProductInfo from "../../components/ProductInfo";
import { sanityClient } from "@/lib/client";
import { urlFor } from "@/lib/client";
import { groq } from "next-sanity";

import Footer from "@/components/Footer";
import { useContext } from "react";
import { addToCart } from "../_app";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";

const ProductDetails = (product, { price, image, name }) => {
  const dispatch = useDispatch();
  const addToCart = product.addToCart;
  const p = product.product[0];

  const addItemToBasket = () => {
    const productToAdd = {
      image: p.image,
      name: p.name,
      price: p.price,
      // details: p.details,
    };
    dispatch(addToBasket(productToAdd));
  };

  return (
    <>
      <div className="w-full md:py-20">
        <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            <div className="bg-gray-100 rounded-xl  w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <img
                src={urlFor(p.image).url()}
                alt=""
                className="h-[500px] py-5 mx-auto"
              />
            </div>
            <div className="flex-[1] py-3">
              <div className="text-[34px] font-semibold mb-2 leading-tight">
                {p.name}
              </div>
              <div className="text-lg font-semibold mb-5">{p.details}</div>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold">
                  MRP : &#8377;{p.price}
                </p>
              </div>

              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={addItemToBasket}
              >
                Add to Cart
              </button>
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                {/* <IoMdHeartEmpty size={20} /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;

export const getServerSideProps = async ({ params: { name } }) => {
  const query = groq`*[_type=="product" && name=='${name}']`;
  const product = await sanityClient.fetch(query);

  return {
    props: {
      product,
    },
  };
};
