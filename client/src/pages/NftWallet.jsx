import React from 'react'
import { Link, useParams } from 'react-router-dom'

import {nfts as nftData} from '../data'
import { CreateListingModal } from '../components'

const NftWallet = () => {
    const params = useParams()
    const thisNFT = nftData.find(nft => nft.id === parseInt(params.id))

    return (
        <div className="bg-dashboard">
            <div className="flex max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center justify-between">
                <h1 className="mt-4 text-xl text-gray-700">{thisNFT.collection}</h1>
                <Link to={`/${thisNFT.collection}`}>
                    <button
                        className="py-2 px-6 font-semibold text-white border bg-[#0778E0] rounded-lg flex items-center relative right mt-6  hover:opacity-75"
                            >
                                Back to Collection
                    </button>
                </Link>
            </div>
            <div className="flex max-w-2xl mx-auto px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8 justify-between">
                <div className="grid grid-cols-1 max-w-xs gap-y-10">
                    <div className="group bg-white p-3 rounded-xl">
                        <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={thisNFT.imageSrc}
                                alt={thisNFT.imageAlt}
                                className="w-full h-full object-center object-cover"
                            />
                            <div className="absolute top-0 right-0">{thisNFT.net}</div>
                        </div>
                        <div className='w-full flex'>
                            <h1 className="mt-4 font-bold text-lg text-gray-700">#{thisNFT.id}</h1>
                        </div>
                        <div className='flex w-full space-x-3'>
                            <div className='w-1/3'>
                                <p>Collateral</p>
                                <h3 className="mt-4 text-sm text-gray-700">{thisNFT.collateral}</h3>
                            </div>
                            <div className='text-center w-1/3'>
                                <p>Max Offer</p>
                                <h3 className="mt-4 text-sm text-gray-700">{thisNFT.maxOffer}</h3>
                            </div>
                            <div className='text-right w-1/3'>
                                <p>Prem</p>
                                <h3 className="mt-4 text-sm text-gray-700">{thisNFT.premium}</h3>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="justify-end column-1 w-2/3 relative right items-right pl-20">
                    <p className="text-right">Choose duration, Execute Position to post collateral & pay premium, Dyve sells the NFT and you receive net of sale amount.</p>
                    <div className="width-full bg-slate-50 text-right mt-6 p-4">Duration</div>
                    <div className="width-full flex justify-end justify-between mt-4">
                        <h3 className="col-start-1 col-span-2">Return by</h3>
                        <h3 className="col-start-5 col-span-2 text-right">0000-00-00 00:00</h3>
                    </div>
                    <div className="width-full flex justify-end justify-between mt-4">
                        <h3 className="col-start-1 col-span-2">Total Premium</h3>
                        <h3 className="col-start-5 col-span-2">00</h3>
                    </div>
                    <div className="width-full bg-slate-50 text-right mt-4 p-4">Net of Sale</div>
                    <div
                        className="absolute right-0 mt-6"
                        >
                        <CreateListingModal {...thisNFT} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NftWallet