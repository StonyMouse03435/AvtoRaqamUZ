import React from "react";
import Navbar from "../components/Navbar";
import { IoMdVideocam } from "react-icons/io";

export default function Instruction() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto bg-gray-100">
        <div className="pt-8 text-center text-aqua text-3xl pb-8">
          Видео инструкции
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8 mt-8 flex items-center gap-2">
          <a
            href="https://youtu.be/MhPfVvQWqPs"
            target="_blank"
            className="flex gap-2 items-center"
          >
            <IoMdVideocam />
            <h1 className="text-start text-black text-2xl mb-4">
              Видео инструкция
            </h1>
          </a>
        </div>
      </div>
    </>
  );
}
