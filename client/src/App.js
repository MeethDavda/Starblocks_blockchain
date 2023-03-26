import abi from "./Contract/coffee.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
import Buy from "./Components/Buy";
import Memos from "./Components/Memos";
import Main from "./Components/Main";

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
      const contractAddress = "0x84597f4A440E29b9Ce44303139283457120FA898";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

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
          setAccount(account);
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
    <div className="bg- text-slate-200 w-full h-full">
      <div className="flex flex-col items-center">
        <Main />
        <Buy state={state} account={account} />
        <Memos state={state} />
      </div>
    </div>
  );
}

export default App;
