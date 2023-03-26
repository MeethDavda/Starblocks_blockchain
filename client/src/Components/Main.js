import React from "react";
import coffee from "../assets/table_coffee.jpg";

function Main({ account }) {
  return (
    <div className="flex w-full">
      <div className="flex flex-col mx-auto mt-10 md:ml-20 md:mt-10 ">
        <div className="flex justify-center md:justify-start md:p-5  flex-row">
          <img
            src="https://www.freepnglogos.com/uploads/skeleton-starbucks-logo-png-29.png"
            className="object-contain h-[10em] "
            alt="Skeleton Starbucks Logo Png"
          />
        </div>

        <div className="w-full mx-auto grid md:grid-cols-2 p-5 md:gap-[15em]">
          <div className="font-bold text-[6rem] lg:text-[10rem] p-5 my-10 lg:ml-10 drop-shadow-2xl md:pt-[2em] tracking-wider">
            STARBLOCKS
          </div>
          <div className="flex justify-center content-center mt-20 ">
            <img
              src={coffee}
              alt="/"
              className="object-contain w-[30em] md:w-[40em] rounded-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
