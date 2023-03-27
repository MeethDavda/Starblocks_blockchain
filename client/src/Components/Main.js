import React from "react";
import coffee from "../assets/table_coffee.jpg";

function Main({ account }) {
  return (
    <div className="w-full px-4 py-10 bg-slate-40">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2">
        <div className="font-bold text-5xl md:text-6xl lg:text-7xl mx-auto my-10 drop-shadow-lg bg-slate-30 lg:pt-32 md:pt-16 tracking-wider">
          STARBLOCKS
        </div>
        <img
          src={coffee}
          alt="/"
          className="object-contain rounded-full drop-shadow-2xl h-[30em] lg:h-[40em] mx-auto mt-10"
        />
      </div>
    </div>
  );
}

export default Main;
