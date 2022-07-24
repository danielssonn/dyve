import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import { useNavigate } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

// icons
import { CgSpinner } from "react-icons/cg";

// assets
import IMAGES from "../../images";
import LendEarnCTA from "../img/landing/lend-earn-cta.svg";
import RentShortCTA from "../img/landing/rent-short-cta.svg";
import DashboardCTA from "../img/landing/dashboard-cta.svg";
import HIWlender from "../img/landing/hiw-lender.svg";
import HIWrenter from "../img/landing/hiw-renter.svg";
import HIWshorter from "../img/landing/hiw-shorter.svg";

const Landing = () => {
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

  // connect wallet
  const connect = async () => {
    const connect = await connectWallet();
  };

  return (
    <div className="animate-fade bg-contain bg-repeat-x w-full flex flex-col justify-center items-center">

      <div className="max-w-4xl justify-center py-28">
        <h1 className="w-1/2 text-center text-4xl font-bold mx-auto">View the Market</h1>
        <p className="w-3/5 text-center text-xl font-semibold py-8 mx-auto">Explore trending collections of the day to find opportunities to short with the highest offers and lowest daily fees</p>
        <div className="flex justify-between place-content-center pt-16">
          <div className="w-1/3 px-4 text-center">
            <img src={LendEarnCTA} alt="logo" className="mx-auto" />
            <div className="font-semibold text-xl py-4">Lend and Earn</div>
            <p className="text-center text-sm">Place your NFTs for rent or shorting, earning fees on your otherwise idle assets!</p>
          </div>
          <div className="w-1/3 px-4 text-center place-content-center">
            <img src={RentShortCTA} alt="logo" className="mx-auto" />
            <div className="font-semibold text-xl py-4">Rent or Short</div>
            <p className="text-center text-sm">See what is instantly available to borrow at the optimal fee and net sale price</p>
          </div>
          <div className="w-1/3 px-4 text-center place-content-center">
            <img src={DashboardCTA} alt="logo" className="mx-auto" />
            <div className="font-semibold text-xl py-4">Your Dashboard</div>
            <p className="text-center text-sm">Manage all your listings and borrows in one convenient place</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl justify-center py-28">
        <h1 className="w-1/2 text-center text-4xl font-bold mx-auto">View the Market</h1>
        <p className="w-3/5 text-center text-xl font-semibold py-8 mx-auto">Explore trending collections of the day to find opportunities to short with the highest offers and lowest daily fees</p>
        <div className="flex justify-between place-content-center pt-16">
          <div className="w-1/3 px-4 text-center">
            <img src={LendEarnCTA} alt="logo" className="mx-auto" />
            <div className="font-semibold text-xl py-4">Lend and Earn</div>
            <p className="text-center text-sm">Place your NFTs for rent or shorting, earning fees on your otherwise idle assets!</p>
          </div>
          <div className="w-1/3 px-4 text-center place-content-center">
            <img src={RentShortCTA} alt="logo" className="mx-auto" />
            <div className="font-semibold text-xl py-4">Rent or Short</div>
            <p className="text-center text-sm">See what is instantly available to borrow at the optimal fee and net sale price</p>
          </div>
          <div className="w-1/3 px-4 text-center place-content-center">
            <img src={DashboardCTA} alt="logo" className="mx-auto" />
            <div className="font-semibold text-xl py-4">Your Dashboard</div>
            <p className="text-center text-sm">Manage all your listings and borrows in one convenient place</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl justify-center py-28">
        <h1 className="w-1/2 text-center text-4xl font-bold mx-auto">How it Works</h1>
        <div className="justify-between place-content-center pt-6">
          <div className="flex w-full py-10 text-center space-x-10 px-10">
            <div className="w-1/2 pr-6">
              <h2 className="font-semibold text-2xl py-2 text-left">Lender</h2>
              <p className="text-left text-sm font-semibold">Place your NFTs for rent or shorting, earning fees on your otherwise idle assets!</p>
            </div>
            <img src={HIWlender} alt="Lender Dashboard" className="mx-auto w-1/2" />
          </div>
          <div className="flex w-full py-10 text-center space-x-10 px-10">
            <img src={HIWrenter} alt="Renter Dashboard" className="mx-auto w-1/2" />
            <div className="w-1/2 pr-6 align-middle">
              <h2 className="font-semibold text-2xl py-2 text-left">Renter</h2>
              <p className="text-left text-sm font-semibold">If the SAME NFT must be returned, renters choose rental length, accessing the NFT's utility before returning it.</p>
            </div>
          </div>
          <div className="flex w-full py-10 text-center space-x-10 px-10">
            <div className="w-1/2 pr-6">
              <h2 className="font-semibold text-2xl py-2 text-left">Shorter</h2>
              <p className="text-left text-sm font-semibold">If ANY NFT can be returned, shorters choose a borrow length and DYVE automatically sells the NFT for the best price, setting up the short position when the shorter is ready to close.</p>
            </div>
            <img src={HIWshorter} alt="Shorter Dashboard" className="mx-auto w-1/2" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Landing;
