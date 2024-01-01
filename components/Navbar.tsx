import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="absolute top-0 z-[40] w-full max-h-[100px] bg-transparent flex justify-between items-center py-2 md:py-4 px-2 md:px-20">
      <Link href={"/"}>
        <div className="flex flex-row gap-3 items-center">
          <div className="relative">
            <Image
              src="/PhoenixLogo.png"
              alt="logo"
              width={40}
              height={40}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h1 className="text-white hidden sm:block text-[25px] font-semibold">
            Somesh{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Chavhan{" "}
            </span>
          </h1>
          <h1 className="text-white text-[25px] sm:hidden font-semibold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              SC{" "}
            </span>
          </h1>
        </div>
      </Link>

      <div className="flex flex-row items-center gap-5 mb-2">
        {Socials.map((social) => (
          <Link key={social.name} href={social.link}>
            <Image
              src={social.src}
              alt={social.name}
              width={social.width}
              height={social.height}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
