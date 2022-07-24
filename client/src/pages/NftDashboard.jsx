import React from 'react'
import { Link, useParams } from 'react-router-dom'

import {nfts as nftData} from '../data'
import {nftCollections} from '../data'
import {openListings} from '../data';
import BoltIcon from '../img/bolt.svg'

const NftDashboard = () => {
    const params = useParams()
    const thisNFT = openListings.find(nft => nft.id === parseInt(params.id))
    const thisCollection = nftCollections.find(collection => collection.collection === params.collection)

    return (
        <div className="">
            {/* Collection Header */}
            <div className="flex max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-baseline justify-between">
                <div className="flex items-center align-middle items-baseline">
                    <div className="w-10 aspect-w-1 aspect-h-1 bg-gray-200 rounded-full overflow-hidden translate-y-3.5">
                        <img
                        src={thisCollection.imageSrc}
                        alt={thisCollection.imageAlt}
                        className="w-full h-full object-center object-cover"
                    />
                    </div>
                    <h1 className="mt-4 text-xl text-gray-700 font-semibold pl-3">{thisCollection.collection}</h1>
                </div>
                {/*<div className="bg-white rounded-xl p-3 flex justify-between space-x-10 px-6">
                    <div className='text-center flex space-x-3'>
                        <p className="text-slate-500">Listed</p>
                        <h3 className="font-semibold">{thisCollection.listed}</h3>
                    </div>
                    <div className='text-center flex space-x-3'>
                        <p className="text-slate-500">24h</p>
                        <h3 className="font-semibold">Ξ{thisCollection.volume24hr}</h3>
                    </div>
                    <div className='text-center flex space-x-3'>
                        <p className="text-slate-500">Max offer</p>
                        <h3 className="font-semibold">Ξ{thisCollection.maxOffer}</h3>
                    </div>
                    <div className='text-center flex space-x-3'>
                        <img className="object-scale-down w-3" src={BoltIcon} />
                        <p className="text-slate-500">Lowest premium/day</p>
                        <h3 className="font-semibold">Ξ{thisCollection.maxNet}</h3>
                    </div>
    </div>*/}
                <Link to={`/dashboard`}>
                    <button
                        className="py-2 px-6 font-semibold bg-white text-[#0778E0] rounded-lg flex items-center relative right mt-6 hover:opacity-75"
                            >
                                Back to Dashboard
                    </button>
                </Link>
            </div>
            {/* Contract Title */}
            <div className="flex justify-end max-w-2xl m-auto pb-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center">
                <div className="text-left pr-6 w-full space-y-2">
                    <h2 className="font-semibold text-3xl">Open</h2>
                </div>
            </div>
            {/* Main Body */}
            <div className="flex max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-between">
                {/* NFT Card */}
                <div className="max-w-2/3 group">
                    <div className="flex bg-white p-3 rounded-xl">
                        <div className="relative aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                            <img
                                src={thisNFT.imageSrc}
                                alt={thisNFT.imageAlt}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className='px-6 py-6 w-full space-y-4 align-middle'>
                            <div className='w-full'>
                                <h1 className="font-semibold text-2xl text-gray-700">#{thisNFT.id}</h1>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p>Collateral</p>
                                <h3 className="text-gray-700 font-semibold">Ξ{thisNFT.collateral}</h3>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p>Best Offer</p>
                                <h3 className="text-gray-700 font-semibold">Ξ{thisNFT.bestOffer}</h3>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p>Return</p>
                                <h3 className="text-gray-700 font-semibold">{thisNFT.expiry}</h3>
                            </div>
                            <div className='w-full flex justify-between'>
                                <p>Return Condition</p>
                                <h3 className="text-gray-700 font-semibold">{thisNFT.return}</h3>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Terms and Settings */}
                <div className="grid grid-cols-1 gap-6 place-self-end w-2/3 pl-20">
                    <div className="w-1/3 rounded-xl text-center p-2 text-[#0778E0] bg-[#cde4f9] justify-self-end">Unborrowed</div>
                    <div className="w-1/3 rounded-xl text-center p-2 text-[#0778E0] bg-[#cde4f9] justify-self-end">Unreturned</div>
                    <p className="text-right text-sm pt-5">We will notify you when someone has taken a position on this listing.</p>
                </div>

            </div>
            {/* Execute Contract button */}
            <div className="flex justify-end max-w-2xl m-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center">
                <div className="text-right pr-6 w-3/4 lg:w-2/4">
                    <p className="text-xs"></p>
                </div>
                <div className="">
                    <button
                            onClick={() => setShowModal(true)}
                            className="py-2 px-6 font-semibold text-white bg-white rounded-lg hover:opacity-75 text-[#0778E0]"
                            >
                        Cancel Listing
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NftDashboard