import React from 'react'
import { Link } from "react-router-dom";

import {nftCollections} from '../data';

const Collections = () => {
    return (
        <div className="">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="py-10">
                    <h1 className="text-2xl font-semibold text-gray-700">Collection Rankings</h1>
                </div>
                <div className="grid grid-cols-1 gap-y-10">
                {nftCollections.map((nft) => (<a key={nft.id} href={nft.href} className="group bg-white p-3 rounded-xl">
                    <Link to={`/${nft.collection}`}>
                        <div className="flex gap-x-5">
                            <div className="relative w-20 aspect-w-1 aspect-h-1 bg-gray-200 rounded-full overflow-hidden">
                                <img
                                    src={nft.imageSrc}
                                    alt={nft.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                                <div className="absolute top-0 right-0">{nft.net}</div>
                            </div>
                            <div className='w-full flex'>
                                <div className='w-1/5'>
                                    <h3 className="text-lg font-semibold pt-5">{nft.collection}</h3>
                                </div>
                                <div className='text-center w-1/5'>
                                    <p>Listed</p>
                                    <h3 className="mt-4 text-sm text-gray-700">{nft.listed}</h3>
                                </div>
                                <div className='text-center w-1/5'>
                                    <p>24h</p>
                                    <h3 className="mt-4 text-sm text-gray-700">{nft.volume24hr}</h3>
                                </div>
                                <div className='text-center w-1/5'>
                                    <p>Max Offer</p>
                                    <h3 className="mt-4 text-sm text-gray-700">{nft.maxOffer}</h3>
                                </div>
                                <div className='text-center w-1/5'>
                                    <p>Max Net</p>
                                    <h3 className="mt-4 text-sm text-gray-700">{nft.maxNet}</h3>
                                </div>
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

export default Collections