import React from "react";

function Navbar({ state, account, setAccount }) {
  async function walletConnect() {
    const { ethereum } = window;
    const account = await ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(account);
  }

  return (
    <div className="top-0 bg-slate-40 mx-auto max-w-[1400px] p-2 mt-4">
      <div className="flex  justify-between">
        <img
          src="https://www.freepnglogos.com/uploads/skeleton-starbucks-logo-png-29.png"
          className="object-cover h-[6em] ml-5 lg:ml-20"
          alt="Skeleton Starbucks Logo Png"
        />
        {account ? (
          <button
            type="submit"
            className="border-2 border-slate-300 bg-[#2b3f39] h-12 w-36 rounded-full mt-5 mr-5 drop-shadow-lg"
            disabled={!state.contract}
          >
            Connected
          </button>
        ) : (
          <button
            type="submit"
            className="border-2 border-slate-300 bg-[#2b3f39] h-12 w-36 rounded-full mt-5 mr-5 drop-shadow-lg"
            disabled={!state.contract}
            onClick={walletConnect}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
