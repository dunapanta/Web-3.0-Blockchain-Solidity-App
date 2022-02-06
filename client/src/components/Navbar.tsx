import React from "react";
import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/images/dunacrypto-logo.png";
import SV from "../assets/images/duna.svg";
import RE from "../assets/images/reddit.svg";
import Link from "next/link";

interface NavbarProps {
  title: string;
  classProps?: string;
}

const NavbarItem = ({ title, classProps }: NavbarProps) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  return (
    <nav className="items-center w-full p-4 ">
      <div
        //className="flex-row md:flex-[0.5] flex-initial justify-center items-center"
        className="flex flex-row items-center justify-center flex-initial space-x-20"
      >
        <div className="flex items-center">
          <Link href="/">
            <a>
              <SV className="h-8 mr-2 w-50" />
            </a>
          </Link>
        </div>
        <ul className="flex-row items-center justify-between flex-initial text-white list-none md:flex">
          {["Mercado", "Intercambio", "Tutoriales", "Billeteras"].map(
            (item, index) => (
              <NavbarItem
                key={Math.random().toString(8)}
                title={item}
                classProps=""
              />
            )
          )}
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            Login
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
