import { Link } from "react-router-dom";

import { ConnectWalletModal } from "../components";

const TopBar = (prop) => {
  return (
    <div className="bg-dashboard p-0 sticky top-0 z-50">
      <div className="bg-white flex justify-end justify-between m-0 rounded-xl">

      <div className="rounded-lg p-4 text-transparent text-4xl font-extrabold bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
          <Link className="items-center align-middle" to="/landing"><h1>Dyve</h1></Link>
        </div>

        <div className="flex justify-start items-center">
          <h1 className="font-semibold text-lg px-6"></h1>
        </div>

        <nav className="flex justify-start items-center">
              <Link className="p-2 m-2 mx-auto" to="/">Market</Link>
              <Link className="p-2 m-2 mx-auto" to="/collections">Collections</Link>
              <Link className="p-2 m-2 mx-auto" to="/dashboard">Dashboard</Link>
        </nav>

        <div className="flex justify-end items-center">

          <div className="p-4 pr-0">
          <Link to="/mynfts"><button
              className="py-2 px-6 font-semibold text-white border bg-[#0778E0] rounded-lg flex items-center hover:opacity-75"
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
