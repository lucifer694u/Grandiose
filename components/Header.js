import React, { useState } from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { selectItems } from "@/slices/basketSlice";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Link from "next/link";

import king from "../Assets/king.png";
import { useContext } from "react";
import { CartContext } from "@/pages/cart";
import { useSelector } from "react-redux";

function Header() {
  const [toggle, setToggle] = useState(false);
  const items = useSelector(selectItems);
  const router = useRouter();
  const { data: session, status } = useSession();
  const handleMobileMenuClick = (path) => {
    setToggle(false); // Close the mobile menu
    router.push(path); // Navigate to the specified path
  };

  return (
    <div className=" flex  sm:flex-row py-3 max-w-screen sticky top-0    md:px-[2%] px-[8%] bg-white font-bold  z-10  tracking-[2px]">
      <div className="flex justify-between w-full items-center ">
        <div onClick={() => setToggle(!toggle)} className="md:hidden block">
          {toggle ? (
            <MenuOpenIcon size={20} color="black" />
          ) : (
            <MenuOutlinedIcon size={20} color="black" />
          )}
        </div>
        <ul
          className={
            toggle
              ? "fixed left-0 z-20 top-[7.5%] w-full h-full border-r border-r-gray-900 bg-white ease-in-out duration-1000"
              : "ease-in-out duration-1000 top-[7.5%] h-full w-full fixed left-[-100%]"
          }
        >
          <div className="flex flex-col font-kanit  tracking-[3px] text-lg py-[200px] px-[5%] space-y-5">
            <span
              className="group text-black transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => handleMobileMenuClick("/category/select")}
            >
              WATCHES
            </span>{" "}
            <a
              className="group text-black transition-all duration-300 ease-in-out"
              href=""
            >
              CUSTOMS
            </a>{" "}
            <a
              className="group text-black transition-all duration-300 ease-in-out"
              href=""
            >
              ENQUIRE
            </a>
          </div>
          <a className="px-8 " href="">
            <SearchOutlinedIcon />
          </a>
        </ul>

        <Link href="/">
          <div
            className="text-center"
            onClick={() => handleMobileMenuClick("/")}
          >
            <Image
              onClick={() => router.push("/")}
              src={king}
              width={140}
              height={100}
              alt=""
              className="object-cover cursor-pointer"
            />
          </div>
        </Link>

        <div className="hidden  sm:block sm:w-1/3 relative">
          {/* <Search /> */}
          <div className="flex flex-row justify-evenly font-kanit text-[8px] tracking-[3px] font-extrabold">
            <div
              className="group text-black transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => handleMobileMenuClick("/category/select")}
            >
              <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out pb-0.5">
                WATCHES
              </span>
            </div>{" "}
            <a
              className="group text-black transition-all duration-300 ease-in-out"
              href=""
            >
              <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out  pb-0.5">
                CUSTOMS
              </span>
            </a>{" "}
            <a
              className="group text-black transition-all duration-300 ease-in-out"
              href=""
            >
              <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out  pb-0.5">
                ENQUIRE
              </span>
            </a>
          </div>
        </div>
        <div className="md:flex">
          <div className="md:flex gap-5  hidden px-2">
            {/* <button className="mx-2 px-3 py-1 shadow-sm rounded-md text-white bg-pink-400 text-sm hover:bg-cyan-400 transition ">Explore</button> */}
            <div
              className="pr-4 cursor-pointer"
              onClick={() => router.push("/favourite")}
            >
              <BookmarkBorderOutlinedIcon />
            </div>
            <div
              className="px-4 cursor-pointer"
              onClick={() => router.push("/cart")}
            >
              <span className="absolute bg-black text-white top-1  h-4 w-4 text-xs bold text-white bg-rose-600  items-center justify-center rounded-full  text-center ">
                {items.length}
              </span>
              <ShoppingBagOutlinedIcon />
            </div>
          </div>
          <div className="cursor-pointer" onClick={!session ? signIn : signOut}>
            <span className="uppercase font-Cursive capitalize text-[20px] font-extrabold   hidden md:inline-flex">
              {session ? `${session.user.name}` : "sign in"}
            </span>
            {/* <span className="uppercase font-kanit text-[10px] font-extrabold mr-4  hidden md:inline-flex">
              Sign In
            </span> */}
          </div>
          <div className="pl-4 cursor-pointer">
            {session ? (
              <img
                src={session.user.image}
                className="h-8 w-8 object-contain rounded-xl"
              />
            ) : (
              <PersonOutlineOutlinedIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
