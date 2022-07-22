import { useState } from 'react'

const CreateListingModal = nftData => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <button
          onClick={() => setShowModal(true)}
          className="py-2 px-6 font-semibold text-white border bg-[#0778E0] rounded-lg flex items-center  hover:opacity-75"
          >
      Create Listing
    </button>
      {showModal
        ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-900/[.5]">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Modal header */}
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-xl font-semibold text-align-center">Create Listing</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl font-bold block p-1 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                {/* Contents of blue bubble in Modal */}
                <div className="relative p-3 flex-auto text-center space-y-2 bg-sky-100 m-5 rounded-2xl">
                  <div className="flex mx-auto px-4 py-4 max-w-7xl justify-between">

                      {/* NFT Card */}
                      <div className="grid grid-cols-1 max-w-xs">
                          <div className="group bg-white p-3 rounded-xl">
                              <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-5 xl:aspect-h-5">
                                  <img
                                      src={nftData.imageSrc}
                                      alt={nftData.imageAlt}
                                      className="w-full h-full object-center object-cover"
                                  />
                                  <div className="absolute top-0 right-0">{nftData.net}</div>
                              </div>
                              <div className='w-full flex'>
                                  <h1 className="mt-4 font-bold text-lg text-gray-700">#{nftData.id}</h1>
                              </div>
                              <div className='flex w-full space-x-3'>
                                  <div className='w-1/3'>
                                      <p>Collateral</p>
                                      <h3 className="mt-4 text-sm text-gray-700">{nftData.collateral}</h3>
                                  </div>
                                  <div className='text-center w-1/3'>
                                      <p>Max Offer</p>
                                      <h3 className="mt-4 text-sm text-gray-700">{nftData.maxOffer}</h3>
                                  </div>
                                  <div className='text-right w-1/3'>
                                      <p>Prem</p>
                                      <h3 className="mt-4 text-sm text-gray-700">{nftData.premium}</h3>
                                  </div>
                              </div>

                          </div>
                      </div>

                      {/* Right panel */}
                      <div className="justify-end column-1 relative right items-right ml-6">
                          <h3 className="text-left font-semibold text-sm">Collateral</h3>
                          <div className="width-full bg-slate-50 text-left mt-2 p-4">00.00</div>
                          <h3 className="text-left font-semibold text-sm mt-5">Fee/day</h3>
                          <div className="width-full bg-slate-50 text-left mt-2 p-4">00.00</div>
                          <div className="width-full flex mt-5">
                              <input id="radio-return-exact" type="radio" className="mr-2" />
                              <label for="radio-return-exact"  name="return-selection"className="font-semibold text-sm">Exact Same NFT</label>
                          </div>
                          <p className="text-left text-xs mt-1">This is considered to be a rental, where the renter will give back the same NFT.</p>
                          <div className="width-full flex mt-5">
                              <input id="radio-return-exact" name="return-selection" type="radio" className="mr-2" />
                              <label for="radio-return-any" className="font-semibold text-sm">Any from Same Collection</label>
                          </div>
                          <p className="text-left text-xs mt-1">In this senario the borrower can give back any NFT, but from the same collection.</p>
                          <h3 className="text-left font-semibold text-sm mt-5">Rent/Borrow Expiry</h3>
                          <div className="width-full bg-slate-50 text-left mt-2 p-4">YYYY-MM-DD</div>
                      </div>
                  </div>
                </div>
                {/* End contents of blue bubble in Modal */}
                <div className="flex justify-between mb-6 px-5">
                  <div className="text-right pr-6">
                    <p className="text-xs">If a required NFT is not replaced before expiry, you can claim the collateral amound indicated above. Using NFTPort, Dyve ensures no stolen NFTs are lent or returned.</p>
                  </div>
                  <div className="w-1/3">
                    <button
                          className="py-2 px-6 font-semibold text-white border bg-[#58DC4D] rounded-lg flex items-center  hover:opacity-75"
                          >
                      Create Listing
                    </button>
                    {/*<ModalListingSuccess />
                      {/**
const [showListingSuccessModal, setShowListingSuccessModal] = useState(false) */}
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

export default CreateListingModal
