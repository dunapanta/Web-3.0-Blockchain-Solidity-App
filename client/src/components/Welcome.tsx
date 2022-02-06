import React from "react";
import { AiFillPayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const Welcome = () => {
  const connectWallet = () => {};
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-start justify-between px-4 py-12 md:flex-row md:p-20">
        <div className="flex flex-col justify-start flex-1 md:mr-10">
          <h1 className="py-1 text-3xl text-white sm:text-5xl text-gradient">
            Enviar Crypto <br /> alrededor del mundo
          </h1>
          <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
            Explora el mundo crypto con dunacrypto. Realiza tus transacciones de
            compra y venta manera segura y fácil.
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row items-center justify-center my-5 bg-[#22535c] p-3  rounded-full cursor-pointer hover:bg-[#1f4b4b] "
          >
            <p className="text-base font-semibold text-white">
              Conectar Billetera
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
