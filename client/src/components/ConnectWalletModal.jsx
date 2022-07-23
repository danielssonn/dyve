import { useState, useContext } from 'react'

import MetamaskLogo from '../img/metamask.svg'
import WalletConnectLogo from '../img/wallet-connect.svg'
import DyveLogo from '../img/dyve-logo.svg'

import { TransactionContext } from "../context/TransactionContext";

const ConnectWalletModal = () => {
  const [showModal, setShowModal] = useState(false);

  const { connectWallet, setUserIdentity } = useContext(TransactionContext);

  // connect wallet
  const connect = async () => {
    const connect = await connectWallet();
  };

  return (
    <>
      <button
            onClick={() => setShowModal(true)}
            className="py-2 px-3 font-semibold text-sm text-white bg-[#58DC4D] rounded-lg flex items-center hover:opacity-75"
            >
        Connect
      </button>
      {showModal
        ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-900/[.5]">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5">
                  <img className="px-1 translate-y-3" src={DyveLogo} alt="Dyve" />
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl font-bold block p-1 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-3 flex-auto text-center space-y-3 bg-[rgba(241,244,250,1)] m-5 rounded-xl">
                  <h2>Connect with</h2>
                  <div onClick={connect} className="flex justify-between rounded-lg bg-white p-2 cursor-pointer hover:opacity-75">
                      <img className="px-4" src={MetamaskLogo} alt="MetaMask" />
                    <p className="p-4 font-semibold">Metamask</p>
                  </div>
                  <div className="flex justify-between rounded-lg bg-white p-2 cursor-pointer hover:opacity-75">
                      <img className="px-2" src={WalletConnectLogo} alt="WalletConnect" />
                    <p className="p-4 font-semibold">WalletConnect</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
          )
        : null}
    </>
  )
}

export default ConnectWalletModal
