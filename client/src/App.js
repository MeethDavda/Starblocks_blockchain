import abi from "./Contract/coffee.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
// const ethers = require("ethers");
import "./App.css";
import Buy from "./Components/Buy";
import Memos from "./Components/Memos";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState();

  //use this template everytime
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x679A3d5A211486fDB5FB4a6B60C40216cA8b5B95";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          // setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask !");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);

  return (
    <div className=" text-slate-200 ">
      <Navbar state={state} account={account} setAccount={setAccount} />
      <Main />
      <Buy state={state} account={account} />
      <Memos state={state} />
    </div>
  );
}

export default App;
