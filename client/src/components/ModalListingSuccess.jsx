import { useState } from 'react'


  const ModalListingSuccess = () => {
  return (
    <>
      {showListingSuccessModal
        ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-900/[.5]">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-3xl font=semibold">Success!</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowListingSuccessModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl font-bold block p-1 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-3 flex-auto text-center space-y-2 bg-sky-100 m-5 rounded-lg">
                  <p>Your NFT Listing is now ready. You can view the NFT listing on the marmet or you can manage all your listings in your dashboard.</p>
                  <button
                        className="py-2 px-6 font-semibold text-white border bg-[#58DC4D] rounded-lg flex items-center  hover:opacity-75"
                        >
                    Go to Dashboard
                  </button>
                  <h2>Checked by NFTPort</h2>

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

export default ModalListingSuccess
