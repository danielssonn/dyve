import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import { useNavigate } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

// icons
import { CgSpinner } from "react-icons/cg";

// assets
import IMAGES from "../../images";

const ConnectWallet = () => {
  const nameInput = React.createRef();

  // firework config
  const bigExplodeProps = {
    force: 0.6,
    duration: 5000,
    particleCount: 300,
    floorHeight: 1600,
    floorWidth: 1600,
  };

  const navigate = useNavigate();

  const { connectWallet, setUserIdentity } = useContext(TransactionContext);

  // cnnect wallet
  const connect = async () => {
    const connect = await connectWallet();
  };

  return (
    <div className="bg-dashboard bg-contain bg-repeat-x w-full h-100v flex flex-col justify-center items-center">
      <h1 className="font-semibold text-2xl text-stone-500 uppercase">Welcome to</h1>

      {/* Dapp name */}
      <div className="rounded-lg p-4 text-transparent xl:text-6xl text-4xl font-extrabold bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
        <h1>Dyve</h1>
      </div>

      {/* step cards */}
      <div className="flex justify-center items-stretch w-full">
        {/* connect wallet */}
        {
          <div className="animate-fade m-5 flex flex-col justify-center items-center xl:w-1/6 w-1/4 border-4 border-[#5841f0]/60 shadow-[#5841f0] drop-shadow-lg rounded-xl  bg-white/60 p-8 cursor-pointer">
            <h1 className="font-semibold text-stone-500"> Connect Your Wallet</h1>
            <img src={IMAGES.wallet} alt="logo" className="" />

            <button
              className="py-2 px-6 font-semibold text-white border bg-[#5841f0] rounded-lg flex items-center"
              onClick={connect}
            >
              Connect
            </button>
          </div>
        }

        {/* enter user name */}
      </div>
    </div>
  );
};

export default ConnectWallet;
