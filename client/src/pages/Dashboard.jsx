import React from 'react'
import { useParams, Link } from 'react-router-dom'

{/* import components */}
import { NftCard } from '../components';

{/* import dummy data */}
import {openListings, closedListings, openBorrows, closedBorrows} from '../data';

const Dashboard = () => {
    return (
        <div className="mb-40">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="py-10">
                    <h1 className="mt-4 text-xl text-gray-700">Dashboard</h1>
                </div>
                <div className="group bg-white p-3 rounded-xl">Stats</div>
                <div className="py-10">
                    <h1 className="mt-4 text-xl text-gray-700">Open Listings</h1>
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
                            <div className="absolute top-0 right-0">{nft.net}</div>
                            <div className="relative bottom-0">
                                <div className="absolute -bottom-4 items-center px-4 py-1 bg-white rounded-xl">
                                    Modify/Cancel
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <h3 className="mt-4 text-sm text-gray-700">{nft.collection}</h3>
                            <h3 className="mt-4 text-sm text-gray-700">#{nft.id}</h3>
                        </div>
                        <div className='flex w-full
space-x-3'>
                            <div className='w-1/3'>
                                <p>Collateral</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.collateral}</h3>
                            </div>
                            <div className='text-center w-1/3'>
                                <p>Max Offer</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.maxOffer}</h3>
                            </div>
                            <div className='text-right w-1/3'>
                                <p>Fee/day</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.premium}</h3>
                            </div>
                        </div>
                    </Link>
                    </a>
                    ))}
                </div>
                <div className="py-10">
                    <h1 className="mt-4 text-xl text-gray-700">Closed Listings</h1>
                </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {closedListings.map((nft) => (<a key={nft.id} href={nft.href} className="group bg-white p-3 rounded-xl">
                        <div className="relative w-full mb-3 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={nft.imageSrc}
                                alt={nft.imageAlt}
                                className="w-full h-full object-center object-cover rounded-lg overflow-hidden group-hover:opacity-75"
                            />
                            <div className="absolute top-0 right-0">{nft.net}</div>
                            <div className="relative bottom-0">
                                <div className="absolute -bottom-4 bottom-4 items-center px-4 py-1 bg-white rounded-xl">
                                    {nft.status}
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <h3 className="mt-4 text-sm text-gray-700">{nft.collection}</h3>
                            <h3 className="mt-4 text-sm text-gray-700">#{nft.id}</h3>
                        </div>
                        <div className='flex w-full
space-x-3'>
                            <div className='w-1/3'>
                                <p>Collateral</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.collateral}</h3>
                            </div>
                            <div className='text-center w-1/3'>
                                <p>Max Offer</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.maxOffer}</h3>
                            </div>
                            <div className='text-right w-1/3'>
                                <p>Total Prem</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.premium}</h3>
                            </div>
                        </div>
                    </a>
                    ))}
                </div>
                <div className="py-10">
                    <h1 className="mt-4 text-xl text-gray-700">Open Borrows</h1>
                </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {openBorrows.map((nft) => (<a key={nft.id} href={nft.href} className="group bg-white p-3 rounded-xl">
                        <div className="relative w-full mb-3 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={nft.imageSrc}
                                alt={nft.imageAlt}
                                className="w-full h-full object-center object-cover rounded-lg overflow-hidden group-hover:opacity-75"
                            />
                            <div className="absolute top-0 right-0">{nft.net}</div>
                            <div className="relative bottom-0">
                                <div className="absolute -bottom-4 bottom-4 items-center px-4 py-1 bg-white rounded-xl">
                                    {nft.status}
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <h3 className="mt-4 text-sm text-gray-700">{nft.collection}</h3>
                            <h3 className="mt-4 text-sm text-gray-700">#{nft.id}</h3>
                        </div>
                        <div className='flex w-full
space-x-3'>
                            <div className='w-1/3'>
                                <p>Collateral</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.collateral}</h3>
                            </div>
                            <div className='text-center w-1/3'>
                                <p>Max Offer</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.maxOffer}</h3>
                            </div>
                            <div className='text-right w-1/3'>
                                <p>Return Codition</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.premium}</h3>
                            </div>
                        </div>
                    </a>
                    ))}
                </div>
                <div className="py-10">
                    <h1 className="mt-4 text-xl text-gray-700">Closed Borrows</h1>
                </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {closedBorrows.map((nft) => (<a key={nft.id} href={nft.href} className="group bg-white p-3 rounded-xl">
                        <div className="relative w-full mb-3 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={nft.imageSrc}
                                alt={nft.imageAlt}
                                className="w-full h-full object-center object-cover rounded-lg overflow-hidden group-hover:opacity-75"
                            />
                            <div className="absolute top-0 right-0">{nft.net}</div>
                            <div className="relative bottom-0">
                                <div className="absolute -bottom-4 bottom-4 items-center px-4 py-1 bg-white rounded-xl">
                                    {nft.status}
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <h3 className="mt-4 text-sm text-gray-700">{nft.collection}</h3>
                            <h3 className="mt-4 text-sm text-gray-700">#{nft.id}</h3>
                        </div>
                        <div className='flex w-full
space-x-3'>
                            <div className='w-1/3'>
                                <p>Collateral</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.collateral}</h3>
                            </div>
                            <div className='text-center w-1/3'>
                                <p>Max Offer</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.maxOffer}</h3>
                            </div>
                            <div className='text-right w-1/3'>
                                <p>Total Fee</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.premium}</h3>
                            </div>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard