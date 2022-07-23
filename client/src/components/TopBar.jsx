import { Link } from "react-router-dom";

import { ConnectWalletModal } from "../components";

import DyveLogo from '../img/dyve-logo.svg'

const TopBar = (prop) => {
  return (
    <div className="bg-dashboard p-0 sticky top-0 z-50">
      <div className="bg-white flex justify-between m-0 rounded-xl shadow-lg">

        <div className="rounded-lg p-4 flex items-center ml-4">
          <Link className="" to="/landing">
            <img className="px-1" src={DyveLogo} alt="Dyve" />
          </Link>
          <nav className="flex justify-start items-center ml-8 font-semibold text-m">
                <Link className="px-2 m-2 mx-auto border-blue-500 border-b-0 hover:font-bold hover:border-b-2" to="/">Market</Link>
                <Link className="px-2 m-2 mx-auto border-blue-500 border-b-0 hover:font-bold hover:border-b-2" to="/collections">Collections</Link>
                <Link className="px-2 m-2 mx-auto border-white border-b-2 hover:font-bold hover:border-blue-500" to="/dashboard">Dashboard</Link>
          </nav>
        </div>

        <div className="flex justify-end items-center">

          <div className="p-4 pr-0">
            <Link to="/mynfts"><button
              className="py-2 px-3 font-semibold text-sm text-[#0778E0] bg-[rgba(241,244,250,1)] rounded-lg flex items-center hover:opacity-75"
            >
              My NFT's
            </button></Link>
          </div>
          <div className="p-4">
            <ConnectWalletModal />
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopBar
