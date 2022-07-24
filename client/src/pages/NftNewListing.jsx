import React from 'react'
import { Link, useParams } from 'react-router-dom'

import {myNfts as nftData} from '../data'
import {nftCollections} from '../data'
import BoltIcon from '../img/bolt.svg'
import CovalentLogo from '../img/covalent.svg'
import NftPortLogo from '../img/nftport.svg'
import { ModalListingSuccess } from '../components'

const NftNewListing = () => {
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
                {/*<div className="bg-white rounded-xl p-3 flex justify-between space-x-10 px-6">
                    <div className='text-center flex space-x-3'>
                        <p className="text-slate-500">Listed</p>
                        <h3 className="font-semibold text-l">{thisCollection.listed}</h3>
                    </div>
                    <div className='text-center flex space-x-3'>
                        <p className="text-slate-500">24h</p>
                        <h3 className="font-semibold text-l">Ξ{thisCollection.volume24hr}</h3>
                    </div>
                    <div className='text-center flex space-x-3'>
                        <p className="text-slate-500">Max offer</p>
                        <h3 className="font-semibold text-l">Ξ{thisCollection.maxOffer}</h3>
                    </div>
                    <div className='text-center flex space-x-3'>
                        <img className="object-scale-down w-3" src={BoltIcon} />
                        <p className="text-slate-500">Lowest premium/day</p>
                        <h3 className="font-semibold text-l">Ξ{thisCollection.maxNet}</h3>
                    </div>
                </div>*/}
                <Link to="/mynfts">
                    <button
                        className="py-2 px-6 font-semibold bg-white text-[#0778E0] rounded-lg flex items-center relative right mt-6 hover:opacity-75"
                            >
                                Back to My NFT's
                    </button>
                </Link>
            </div>
            {/* Contract Title */}
            <div className="flex justify-end max-w-2xl m-auto pb-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center">
                <div className="text-left pr-6 w-full space-y-2">
                    <h2 className="font-semibold text-gray-700 text-3xl">Create New Listing</h2>
                </div>
            </div>
            {/* Main Body */}
            <div className="flex max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-between">
                {/* NFT Card */}
                <div className="grid grid-cols-1 max-w-xs">
                    <div className="group bg-white p-3 rounded-xl">
                        <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-5 xl:aspect-h-5">
                            <img
                                src={thisNFT.imageSrc}
                                alt={thisNFT.imageAlt}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className='w-full flex justify-between px-1'>
                            <h1 className="mt-4 font-semibold text-md text-gray-700">{thisNFT.collection}</h1>
                            <h1 className="mt-4 font-bold text-lg text-gray-700">#{thisNFT.id}</h1>
                        </div>
                        <div className='flex w-full space-x-3 pt-2 px-1'>
                            <div className='w-1/3'>
                                <p className="text-[#99B2C6] font-semibold text-xs">Floor Price</p>
                                <h3 className="mt-1 text-gray-700 font-semibold">{thisNFT.floorPrice}</h3>
                            </div>
                            <div className='text-center w-1/3'>
                                <p className="text-[#99B2C6] font-semibold text-xs">Best Offer</p>
                                <h3 className="mt-1 text-gray-700 font-semibold">{thisNFT.bestOffer}</h3>
                            </div>
                            <div className='text-right w-1/3'>
                                <p className="text-[#99B2C6] font-semibold text-xs">Rarity</p>
                                <h3 className="mt-1 text-gray-700 font-semibold">{thisNFT.rarity}</h3>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Terms and Settings */}
                <div className="justify-end column-1 w-2/3 relative right items-right pl-20">
                    <h3 className="text-left text-lg font-semibold">Lending Conditions</h3>
                    <div className="flex space-x-10">
                        <div className="py-4 w-1/2">
                            <h3 className="text-left font-semibold text-sm">Collateral</h3>
                            <input class="mt-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-9 focus:outline-none focus:shadow-outline" id="collateral" type="number" step="0.1" min='0' placeholder="Collateral" />
                        </div>
                        <div className="py-4 w-1/2">
                            <h3 className="text-left font-semibold text-sm">Fee / day</h3>
                            <input class="mt-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-9 focus:outline-none focus:shadow-outline" id="fee-day" type="number" step="0.01" min='0' placeholder="Fee per day" />
                        </div>
                    </div>

                    <div className="flex space-x-10">
                        <div className="py-4 w-1/2">
                            <h3 className="text-left text-lg font-semibold">Return Conditions</h3>
                            <div className="width-full flex mt-4">
                                <input id="radio-return-exact" name="return-selection" type="radio" className="mr-2" />
                                <label for="radio-return-exact"  name="return-selection"className="font-semibold text-sm">Exact Same NFT</label>
                            </div>
                            <p className="text-left text-xs mt-1">This is considered to be a rental, where the renter will give back the same NFT.</p>
                            <div className="width-full flex mt-5">
                                <input id="radio-return-same" name="return-selection" type="radio" className="mr-2" />
                                <label for="radio-return-same" className="font-semibold text-sm">Any from Same Collection</label>
                            </div>
                            <p className="text-left text-xs mt-1">In this senario the borrower can give back any NFT, but from the same collection.</p>
                            <div className="width-full flex mt-5">
                                <input id="radio-return-criteria" name="return-selection" type="radio" className="mr-2" />
                                <label for="radio-return-criteria" className="font-semibold text-sm">Set Criteria</label>
                            </div>
                            <p className="text-left text-xs mt-1">In this scenario the borrower can give back any NFT but from the same collection with a Set Trait chosen by the lender.</p>
                        </div>
                        <div className="py-4 w-1/2">
                            <h3 className="text-left text-lg font-semibold">Expiration</h3>
                            <h3 className="text-left mt-4 font-semibold text-sm">Listing Expiry</h3>
                            <p className="text-left text-xs mt-1">Date you want the listing to expire.</p>
                            <div className="w-full rounded-xl text-left">
                                <input id="listing-expiry" name="listing-expiry" type="date" className="w-full bg-white rounded-xl text-left mt-2 p-4" />
                            </div>
                            <h3 className="text-left mt-4 font-semibold text-sm">Select Criteria</h3>
                            <p className="text-left text-xs mt-1">NFT trait you want returned to you.</p>
                            <div className="width-full bg-white rounded-xl text-left mt-2">
                                <select class="block appearance-none w-full rounded-xl leading-tight p-4 placeholder:text-slate-200" id="select-criteria" placeholder="Select Criteria">
                                    <option default>Select trait</option>
                                    <option>BODDEE - Dawwww</option>
                                    <option>COLLRZES - Purdy Cave</option>
                                    <option>EERS - EERS</option>
                                    <option>EYE ON DAT SIDE - Gathp</option>
                                    <option>EYZ ON DIS SIDE - LAZERRR</option>
                                    <option>HEDZ - Flatface</option>
                                    <option>MUNCHHOLD - Nudder Mouf</option>
                                    <option>STANKFINDER - Sniffer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Execute Contract button */}
            <div className="flex justify-end max-w-2xl m-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center">
                  <img className="pr-6" src={CovalentLogo} alt="Covalent" />
                  <img className="pr-6" src={NftPortLogo} alt="NFTPort" />
                <div className="text-right pr-6 w-3/4 lg:w-2/4">
                    <p className="text-xs font-semibold">Dyve ensures no stolen NFTs are lent or returned on the platform. If the required NFT is not replaced before expiry, <strong>you can claim the collateral amount indicated above.</strong></p>
                </div>
                <div className="">
                    <ModalListingSuccess />
                    {/*<CreateListingModal {...thisNFT} />*/}
                </div>
            </div>
        </div>
    )
}

export default NftNewListing