import React from 'react'
import { Link, useParams } from 'react-router-dom'


import {nfts as nftData} from '../data'
import {nftCollections} from '../data'
import BoltIcon from '../img/bolt.svg'
import { ModalShortSuccess } from '../components'

const Nft = () => {
    const params = useParams()
    const thisNFT = nftData.find(nft => nft.id === parseInt(params.id))
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
                <div className="bg-white rounded-xl p-3 flex justify-between space-x-10 px-6">
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
                </div>
                <Link to={`/${thisNFT.collection}`}>
                    <button
                        className="py-2 px-6 font-semibold bg-white text-[#0778E0] rounded-lg flex items-center relative right mt-6 hover:opacity-75"
                            >
                                Back to Collection
                    </button>
                </Link>
            </div>
            {/* Contract Title */}
            <div className="flex justify-end max-w-2xl m-auto pb-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center">
                <div className="text-left pr-6 w-full space-y-2">
                    <h2 className="font-semibold  text-3xl">Short</h2>
                    <p className="text-sm">The lender has decided that you can return, borrow and short this NFT, and return one with a set trait as noted below.</p>
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
                                <p>Premium/day</p>
                                <h3 className="text-gray-700 font-semibold">Ξ{thisNFT.premium}</h3>
                            </div>
                            <div>
                                <div className='w-full flex justify-between'>
                                    <p>Return condition</p>
                                    <h3 className="text-gray-700 font-semibold pl-6">{thisNFT.return}</h3>
                                </div>
                                <div className="text-xs text-right">{thisNFT.trait}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Terms and Settings */}
                <div className="justify-end column-1 w-2/3 relative right items-right pl-20">
                    <h3 className="text-left text-lg font-semibold">Duration</h3>
                    <p className="text-left text-xs mt-1">Amount of days before you return an NFT</p>
                    <input class="mt-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-9 focus:outline-none focus:shadow-outline" id="duration-position" type="number" step="1" max='30' min='1' placeholder="Amount of days" />
                    <div className="width-full text-sm flex justify-between py-1 pb-3">
                        <p>Max Duration</p>
                        <p>30 days</p>
                    </div>
                    <div className="width-full flex justify-end justify-between mt-4">
                        <h3 className="col-start-1 col-span-2 text-lg font-semibold">Return by</h3>
                        <h3 className="col-start-5 col-span-2 text-right font-semibold text-[#0778E0]">2022/07/31</h3>
                    </div>
                    <div className="width-full flex justify-end justify-between my-4">
                        <h3 className="col-start-1 col-span-2 text-lg font-semibold">Total Premium</h3>
                        <h3 className="col-start-5 col-span-2 font-semibold text-[#0778E0]">Ξ1.3</h3>
                    </div>
                    <div className="width-full flex justify-end justify-between my-3 items-center bg-[#def8db] rounded-full p-4">
                        <img className="object-scale-down w-7" src={BoltIcon} />
                        <div className="py-2 px-4 font-semibold text-[#58dc4d]">
                            Net of Sale
                        </div>
                        <h3 className="col-start-5 col-span-2 font-semibold">Ξ0.75</h3>
                    </div>
                    <p className="text-right text-xs pt-5">Total Amount to pay (including collateral)</p>
                    <h3 className="text-right text-4xl font-semibold py-1">Ξ13.25</h3>
                    <h3 className="text-right text-xl">$15,427.83</h3>
                </div>

            </div>
            {/* Execute Contract button */}
            <div className="flex justify-end max-w-2xl m-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center">
                <div className="text-right pr-6 w-3/4 lg:w-2/4">
                    <p className="text-xs">Post collateral and pay premium to execute position. Dyve sells the NFT automatically and you will receive net of sale amount when you close the position on your dashboard.</p>
                </div>
                <div className="">
                    <ModalShortSuccess />
                </div>
            </div>
        </div>
    )
}

export default Nft