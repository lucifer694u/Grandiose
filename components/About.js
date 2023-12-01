import React from "react";

const About = () => {
  return (
    <div className="mb-[200px]">
     
      <div className=" flex flex-col  text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <img
        src="https://images.unsplash.com/flagged/photo-1565241651368-35437ca5563f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10 mt-[200px] md:mt-0">
      <h3 className="text-4xl font-semibold font-Brush">
        About
      </h3>
        <p className="text-sm ">
          An Energetic Full-Stack Web Developer, eager to work in Tech-Industry
          with keen interest. Love to build usercentric attractive web Apps.
          Dedicated to working hard to make positive contributions. I love
          making front end web designs. And i have been coding for 1 year .
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;
