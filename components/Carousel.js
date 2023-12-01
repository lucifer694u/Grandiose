import React from "react";

const Carousel = () => {
  return (
    <section className="h-[810px] ">
      <div className=" mt-20 md:flex flex-row space-y-5 md:space-y-0  gap-20 justify-center font-Cursive mb-10  text-center md:text-8xl text-5xl">
        <h1>Grandiose</h1>
        <h1>Luxury </h1>
        <h1> Watches</h1>
      </div>
      <div className="conatiner h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1630262174975-38bf8d42745f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
};

export default Carousel;
