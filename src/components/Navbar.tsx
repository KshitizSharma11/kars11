"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const NavItems=[{
    label: "Home",
    href: "/",
  },{
    label: "Cars",
    href: "/Cars",
  },{
    label: "Bookings",
    href:"/Bookings"
  },{
    label: "About",
    href: "/About",
  }];
  const initalState= usePathname();

  const [active, setActive] = useState(initalState);

 
  return (
   
    <div className="fixed top-0 z-50 w-full flex flex-row items-center justify-between py-4 bg-[#184077]  shadow-md text-xl font-medium px-10">
      
      <div className="w-[1/3] text-4xl font-semibold ml-6">
        <span className="text-orange-400">Kars</span>
        <span className="text-white">11</span>
      </div>
      <div className="w-[1/3]  flex flex-row text-2xl space-x-8 font-medium">
        {NavItems.map((Item,Index)=>(
       
          <Link href={`${Item.href}`} onClick={() => setActive(Item.href)} key={Index}>
            <h1
              className={`text-white ${
                active == Item.href
                  ? "underline underline-offset-4 underline-[#008dda] decoration-4 decoration-orange-400"
                  : ""
              } hover:text-orange-400`}
            >
              {Item.label}
            </h1>
          </Link>
       ))}
       
       </div>
       <div className="w-[1/3] flex flex-row space-x-4 text-xl text-white mr-6">
       <Link href="/login">
        <button className=" py-2 px-6  rounded-full border-2 border-white hover:border-orange-400">
        <h1>Login </h1>
        </button>
        </Link>
        <Link href="/register">
        <button className="bg-[#008dda] py-2 px-6  rounded-full hover:bg-orange-400">
        <h1>Sign Up</h1>
        </button>
        </Link>
       </div>
       </div>
  );
};

export default Navbar;
