import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function Memos({ state }) {
  const [memos, setMemos] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <div className="bg-[#2f453e] rounded-lg p-4 drop-shadow-xl mt-10 mb-20 md:text-3xl m-3">
      {memos.map((memo) => {
        return (
          <table key={memo.timestamp} className="my-5 ">
            <tbody>
              <tr className="">
                <td className="px-3">{memo.name}</td>
                <td className="px-3">{memo.message}</td>
                <td className="px-3">
                  {new Date(memo.timestamp * 1000).toLocaleString()}
                </td>
                <td className="px-3">{memo.from}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default Memos;
