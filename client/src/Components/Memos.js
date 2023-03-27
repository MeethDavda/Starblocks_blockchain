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
    <div className="bg-slate-30  overflow-auto mx-4 my-10 ">
      <table
        key={Math.random()}
        class="table-fixed mx-auto max-w-[1024px] border-separate border-spacing-3 border-2 rounded-lg border-[#3e554e]"
      >
        <thead>
          <tr className="bg-[#3e554e]">
            <th className="rounded-lg p-1 md:p-2">Name</th>
            <th className="rounded-lg p-1 md:p-2">Message</th>
            <th className="rounded-lg p-1 md:p-2">Time stamp</th>
            <th className="rounded-lg p-1 md:p-2">From</th>
          </tr>
        </thead>
        {memos.map((memo) => {
          return (
            <tbody>
              <tr className="text-sm  ">
                <td>{memo.name}</td>
                <td>{memo.message}</td>
                <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                <td>{memo.from}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Memos;
