import { useState } from 'react'
import { Link } from 'react-router-dom'

import CovalentLogo from '../img/covalent.svg'
import NftPortLogo from '../img/nftport.svg'

const ModalDyveSuccess = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <button
          onClick={() => setShowModal(true)}
          className="py-2 px-6 font-semibold text-white bg-[#58DC4D] rounded-lg flex items-center hover:opacity-75"
          >
      Dyve in and Close
    </button>
      {showModal
        ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-900/[.5]">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold pt-2 pl-2">Success!</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl font-bold block p-1 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-3 flex-auto text-center space-y-8 m-5 mx-20 rounded-lg">
                  <p>Your NFT position has been closed.</p>
                  
                  <Link className="flex justify-center" to="/dashboard/borrower/closed"><button
                    className="py-2 px-6 font-semibold text-lg text-[#0778E0] bg-[rgba(241,244,250,1)] rounded-lg flex items-center hover:opacity-75"
                  >
                    Go to Dashboard
                  </button></Link>
                  <div className="flex justify-center pb-8">
                    <h2>Checked by</h2>
                  <img className="pl-6" src={CovalentLogo} alt="Covalent" />
                  <img className="pl-6" src={NftPortLogo} alt="NFTPort" />
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

export default ModalDyveSuccess
