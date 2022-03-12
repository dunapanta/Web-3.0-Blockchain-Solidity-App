import React from "react";
import { AiFillPayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

interface InputProps {
  placeholder: string;
  name: string;
  type: "text" | "number" | "password";
  value: string;
  handleChange: (str: string) => void;
}

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({
  placeholder,
  name,
  value,
  type,
  handleChange,
}: InputProps) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e.target.value)}
    className="w-full h-10 p-2 my-2 border-2 border-gray-400 rounded-lg"
  />
);

const Welcome = () => {
  const connectWallet = () => {};
  const handleSubmit = () => {};
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-start justify-between px-4 py-12 mf:flex-row md:p-20">
        <div className="flex flex-col justify-start flex-1 mf:mr-10">
          <h1 className="py-1 text-3xl text-white sm:text-5xl text-gradient">
            Enviar Crypto <br /> alrededor del mundo
          </h1>
          <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
            Explora el mundo crypto con dunacrypto. Realiza tus transacciones de
            compra y venta manera segura y fácil.
          </p>
          {/* Buttom */}
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row items-center justify-center my-5 bg-[#22535c] p-3  rounded-full cursor-pointer hover:bg-[#1f4b4b] "
          >
            <p className="text-base font-semibold text-white">
              Conectar Billetera
            </p>
          </button>

          {/* Table */}
          <div className="grid w-full grid-cols-2 mt-10 sm:grid-cols-3">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Fiabilidad</div>
            <div className={`${commonStyles}`}>Seguridad</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Rápido</div>
            <div className={`${commonStyles}`}>Seguridad</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
        </div>

        {/* Card */}
        <div className="flex flex-col items-center justify-start flex-1 w-full mt-10 mf:mt-0">
          <div className="flex-col items-start justify-end w-full h-40 p-3 my-5 rounded-xl sm:w-72 eth-card white-glassmorpism">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                {/* Addres Blockchain Wallet */}
                <p className="text-sm font-light text-white">
                  0xxfgfdd....dsfsdfs
                </p>
                <p className="mt-1 text-sm text-lg font-semibold text-white">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 blue-glassmorphism">
            <Input
              placeholder="Enviar a"
              name="addressTo"
              type="text"
              value={""}
              handleChange={() => {}}
            />
            <Input
              placeholder="Cantidad (ETH)"
              name="amount"
              type="number"
              value={""}
              handleChange={() => {}}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              value={""}
              handleChange={() => {}}
            />
            <Input
              placeholder="Mensaje"
              name="mesage"
              type="text"
              value={""}
              handleChange={() => {}}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[33d4f88] rounded-full cursor-pointer"
              >
                Enviar ahora
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
