import React from "react";
import royal from "../Assets/royal.png";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

function Footer() {
  return (
    <div className=" space-x-5 bg-black text-white font-kanit tracking-[1px]">
      <div className="flex justify-center pt-20 mb-10">
        <Image
          src={royal}
          width={140}
          height={100}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="mb-10 ">
        <ul className="md:flex justify-center text-center space-y-5 md:space-y-0  gap-8 uppercase text-[8px] font-bold">
          <li>
            <a href="">privacy policy</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Track order</a>
          </li>
          <li>
            <a href="">Legal Notice of terms of use</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">Enquiry</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-10 mb-10">
        <SocialIcon
          url="https://twitter.com/home"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/himanshu-kumar-680107219/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/lucifer694u"
          fgColor="white"
          bgColor="transparent"
        />
      </div>
      <div className="flex justify-center text-[12px] pb-5">
        © 2023 Grandiose All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
