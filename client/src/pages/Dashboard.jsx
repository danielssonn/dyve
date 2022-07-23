import React from 'react'
import { useParams, Link } from 'react-router-dom'

{/* import components */}
import { NftCard } from '../components';
import BoltIcon from '../img/bolt.svg'

{/* import dummy data */}
import {openListings} from '../data';

const Dashboard = () => {
    return (
        <div className="mb-40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-10 flex space-x-10">
                    <h1 className="text-2xl font-semibold text-gray-700">Positions and Listings</h1>
                    <div className="flex">
                        <div className="bg-[#012343] text-white font-semibold rounded-l-xl p-2 px-3 cursor-pointer hover:bg-[#012343] hover:text-white">Open</div>
                        <div className="bg-white text-[#99B2C6] font-semibold rounded-r-xl p-2 px-3 cursor-pointer hover:bg-[#012343] hover:text-white">Closed</div>
                    </div>
                </div>
                <div className="flex space-x-4 pb-10">
                    <div className="bg-white p-2 px-4 rounded-xl font-semibold text-xs text-[#99B2C6] cursor-pointer hover:bg-[#012343] hover:text-white">#Rarity</div>
                    <div className="bg-white p-2 px-4 rounded-xl font-semibold text-xs text-[#99B2C6] cursor-pointer hover:bg-[#012343] hover:text-white">Collateral</div>
                    <div className="bg-white p-2 px-4 rounded-xl font-semibold text-xs text-[#99B2C6] cursor-pointer hover:bg-[#012343] hover:text-white">Premium</div>
                    <div className="bg-white p-2 px-4 rounded-xl font-semibold text-xs text-[#99B2C6] cursor-pointer hover:bg-[#012343] hover:text-white">Max Offer</div>
                    <div className="bg-white p-2 px-4 rounded-xl font-semibold text-xs text-[#99B2C6] cursor-pointer hover:bg-[#012343] hover:text-white">Expiry Date</div>
                    <div className="bg-white p-2 px-4 rounded-xl font-semibold text-xs text-[#99B2C6] cursor-pointer hover:bg-[#012343] hover:text-white">Max Net of Sale</div>
                    <div className="bg-white p-2 px-4 rounded-xl font-semibold text-xs text-[#99B2C6] cursor-pointer hover:bg-[#012343] hover:text-white">A-Z</div>
                </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {openListings.map((nft) => (<a key={nft.id} href={nft.href} className="group bg-white p-3 rounded-xl">
                    <Link to={`/dashboard/${nft.collection}/${nft.id}`}>
                        <div className="relative w-full mb-3 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={nft.imageSrc}
                                alt={nft.imageAlt}
                                className="w-full h-full object-center object-cover rounded-lg overflow-hidden group-hover:opacity-75"
                            />
                            <div className="absolute top-0 right-0 text-sm bg-[#012343] text-white p-2 px-3 rounded-lg flex">
                                Ξ{nft.net}/day
                                <img className="object-scale-down w-4 pl-1" src={BoltIcon} />
                            </div>
                            <div className="relative bottom-0">
                                <div className="absolute -bottom-4 items-center px-4 py-1 bg-white rounded-xl">
                                    Modify/Cancel
                                </div>
                            </div>
                        </div><div className='w-full flex justify-between px-1'>
                            <h1 className="mt-4 font-semibold text-md text-gray-700">{nft.collection}</h1>
                            <h1 className="mt-4 font-bold text-lg text-gray-700">#{nft.id}</h1>
                        </div>
                        <div className='flex w-full space-x-3 pt-2 px-1'>
                            <div className='w-1/3'>
                                <p className="text-[#99B2C6] font-semibold text-xs">Collateral</p>
                                <h3 className="mt-1 text-gray-700 font-semibold">{nft.collateral}</h3>
                            </div>
                            <div className='text-center w-1/3'>
                                <p className="text-[#99B2C6] font-semibold text-xs">Max Offer</p>
                                <h3 className="mt-1 text-gray-700 font-semibold">{nft.maxOffer}</h3>
                            </div>
                            <div className='text-right w-1/3'>
                                <p className="text-[#99B2C6] font-semibold text-xs">Premium</p>
                                <h3 className="mt-1 text-gray-700 font-semibold">{nft.premium}</h3>
                            </div>
                        </div>
                    </Link>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard