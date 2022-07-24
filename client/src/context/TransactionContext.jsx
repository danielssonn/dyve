import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

export const TransactionContext = React.createContext();

// ethereum object from window, initiate provider and signer
const { ethereum } = window;
const provider = new ethers.providers.Web3Provider(ethereum);
const signer = provider.getSigner();

// context provider
export const TransactionProvider = ({ children }) => {
  // states
  const [currentUser, setCurrentUser] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");

  // check if wallet is connect
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // connect to user's wallet
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  // check if wallet is connected every time page is rerendered
  useEffect(() => {
    checkIfWalletIsConnected();
    // loadIdentitiesFromContract()
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
