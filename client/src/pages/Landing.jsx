import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import { useNavigate, Link } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

// icons
import { CgSpinner } from "react-icons/cg";

// assets
import IMAGES from "../../images";
import HeroGraphic from "../img/landing/hero-graphic.svg";
import DyveGoggles from "../img/dyve-goggles.svg";
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

      <div className="w-full justify-center pb-20 mt-32 flex flex-col justify-center items-center heroBg">
          <div className="max-w-5xl text-left grid grid-cols-2 gap-8 items-center">
            <div className="pr-6 justify-left space-y-10">
              <h1 className="text-4xl font-bold mx-auto pt-12">Rent, Lend,<br /> & Short NFTs</h1>
              <h2 className="text-2xl mx-auto font-semibold">Lend your NFTs for a fee, and rent or short NFTs in a safe and secure way</h2>
              <div className="w-full place-content-center">
                <Link to="/">
                    <button
                      className="py-4 px-8 font-semibold text-[#0778E0] bg-white rounded-lg hover:opacity-75"
                      >
                      Start Trading
                  </button>
                </Link>
              </div>
              <p className="text-sm">The first NFT shorting protocol where lenders can charge a premium for short sellers to return ANY NFT from a collection</p>
            </div>
            <img src={HeroGraphic} alt="dyve" className="mx-auto" />
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
            <p className="text-center text-sm">See what is instantly available to borrow at the optimal fee and net sale price.</p>
          </div>
          <div className="w-1/3 px-4 text-center place-content-center">
            <img src={DashboardCTA} alt="logo" className="mx-auto" />
            <div className="font-semibold text-xl py-4">Your Dashboard</div>
            <p className="text-center text-sm">Manage all your listings and borrows in one convenient place.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl justify-center py-14">
        <h1 className="text-center text-4xl font-bold mx-auto">How it Works</h1>
        <div className="justify-between place-content-center pt-6 space-y-4">
          <div className="w-fulltext-center grid grid-cols-2 gap-10 items-center">
            <div className="pr-6">
              <h2 className="font-semibold text-2xl py-2 text-left">Lender</h2>
              <p className="text-left text-sm font-semibold">Place your NFTs for rent or shorting, earning fees on your otherwise idle assets!</p>
            </div>
            <img src={HIWlender} alt="Lender Dashboard" className="mx-auto" />
          </div>
          <div className="w-full text-center grid grid-cols-2 gap-10 items-center">
            <img src={HIWrenter} alt="Renter Dashboard" className="mx-auto" />
            <div className=" pr-6 align-middle">
              <h2 className="font-semibold text-2xl py-2 text-left">Renter</h2>
              <p className="text-left text-sm font-semibold">If the SAME NFT must be returned, renters choose rental length, accessing the NFT's utility before returning it.</p>
            </div>
          </div>
          <div className="w-full text-center grid grid-cols-2 gap-10 items-center">
            <div className="pr-6">
              <h2 className="font-semibold text-2xl py-2 text-left">Shorter</h2>
              <p className="text-left text-sm font-semibold">If ANY NFT can be returned, shorters choose a borrow length and DYVE automatically sells the NFT for the best price, setting up the short position when the shorter is ready to close.</p>
            </div>
            <img src={HIWshorter} alt="Shorter Dashboard" className="mx-auto" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl justify-center py-14">
        <img src={DyveGoggles} alt="logo" className="mx-auto" />
        <p className="w-4/5 text-center text-lg py-12 mx-auto">When ready, shorters tell Dyve to buy and return the required NFT in a simple click, closing the position and retreiving collateral, making a profit if the floor price of the collection has dropped enough</p>
        <div className="flex justify-between place-content-center">
          <div className="w-full px-4 text-center place-content-center">
            <Link to="/">
                <button
                  className="py-4 px-8 font-semibold bg-[#012343] text-white rounded-lg hover:opacity-75"
                  >
                  Ready to Dyve in?
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl justify-center py-40">
        <h1 className="w-1/2 text-center text-2xl font-bold mx-auto pt-14">Contact our Dyve Team</h1>
        <p className="w-4/5 text-center text-lg py-8 mx-auto">Having trouble with the app or just wanna chat? Contact us to keep updated</p>
        <div className="flex justify-between place-content-center">
          <div className="w-full px-4 text-center place-content-center">
            <Link to="">
                <button
                  className="py-2 px-4 font-semibold text-sm bg-[#58DC4D] text-white rounded-lg hover:opacity-75"
                  >
                  Join our Discord
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full justify-center py-4 bg-[#012343]">
        <p className="text-right text-xs py-8 px-14 mx-auto text-white">Submission for EthGlobal HackFS 2022</p>
      </div>

    </div>
  );
};

export default Landing;
