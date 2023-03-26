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
    <div className=" mt-32 flex mx-auto my-10 flex-col items-center">
      <div className="text-2xl p-5 tracking-wide md:text-[2rem] mt-10 mb-20 px-10 bg-[#2f453e] rounded-lg m-3">
        Connected account : {account}
      </div>
      <div className="text-3xl p-3 tracking-wide md:text-[3rem] mt-10 mb-20 px-10">
        Enter your Name and give a message to buy our Coffee !
      </div>
      <form
        action="submit"
        className="border-0 rounded-3xl bg-[#2f453e] p-6 drop-shadow-2xl"
      >
        <div className="flex flex-col mx-auto items-center">
          <label className="text-6xl p-3 tracking-wide md:text-[5rem]">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border-solid p-3 w-[20em] tracking-wider rounded-xl my-4 md:w-[30em] md:p-6 text-black"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="text-6xl p-3 tracking-wide md:text-[5rem] mt-5 md:mt-10">
            Message
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Message"
            className="border-solid p-3 w-[20em] tracking-wider rounded-xl my-5 md:w-[30em] md:p-6 text-black"
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border-2 border-slate-300 p-2 w-[10em] mt-6 rounded-md text-lg hover:w-[15em] ease-in-out duration-150 md:p-5 md:w-[20em] md:hover:w-[25em]"
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
