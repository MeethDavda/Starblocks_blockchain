import React, { useState } from "react";
import { ethers } from "ethers";

function Buy({ state, account }) {
  const { contract } = state;
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  async function buy(e) {
    e.preventDefault();
    // console.log(name, msg, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyCoffee(name, msg, amount);
    await transaction.wait();
    console.log("transaction done");
  }

  return (
    <div className="flex flex-col mx-auto bg-slate-30 w-full items-center px-4 py-5 ">
      <div className="bg-[#2f453e] p-4 my-5 text-sm md:text-lg lg:text-xl rounded-md text-slate-300">
        Connected account : {account}
      </div>
      <div className="bg-slate-30 my-5 mx-3 text-md md:text-lg lg:text-xl">
        Enter your Name and give a message to buy our Coffee !
      </div>
      <form action="submit" className="w-[80%] max-w-[450px]">
        <div className="flex flex-col bg-slate-10 p-5 bg-[#2f453e] rounded-lg">
          <label className="text-md md:text-lg lg:text-xl py-1">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="text-black p-2 rounded-md"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="text-md md:text-lg lg:text-xl py-1 mt-4">
            Message
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Message"
            className="text-black p-2 rounded-md "
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border-2 border-slate-300 p-2 w-[10em] mt-9 rounded-full text-lg hover:w-[15em] ease-in-out duration-150 md:p-4 md:w-[70%] md:hover:w-[90%] mx-auto"
            onClick={buy}
            disabled={!contract}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
}

export default Buy;
