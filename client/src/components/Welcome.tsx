import React from "react";
import { AiFillPayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-start justify-between px-4 py-12 md:flex-row md:p-20">
        <div className="flex flex-col justify-start flex-1 md:mr-10">
          <h1 className="py-1 text-3xl text-white sm:text-5xl text-gradient">
            Enviar Crypto <br /> alrededor del mundo
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
