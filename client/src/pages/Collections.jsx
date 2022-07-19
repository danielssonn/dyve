import React from 'react'

import {nftCollections} from '../data';

const Collections = () => {
    return (
        <div className="bg-dashboard">
            <div className="x-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {nftCollections.map((nft) => (
                    <a key={nft.id} href={nft.href} className="group bg-white p-3 rounded-xl">
                        <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={nft.imageSrc}
                                alt={nft.imageAlt}
                                className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                            <div className="absolute top-0 right-0">{nft.maxNet}</div>
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{nft.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{nft.price}</p>
                        <div className='flex 
space-x-3'>
                            <div className='w-1/3'>
                                <p>Listed</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.listed}</h3>
                            </div>
                            <div className='w-1/3 text-center'>
                                <p>Max Offer</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.maxOffer}</h3>
                            </div>
                            <div className='w-1/3 text-right'>
                                <p>Max Net</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.maxNet}</h3>
                            </div>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Collections