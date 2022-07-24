import React from 'react'
import { Link, UseParams } from "react-router-dom";

import {nfts} from '../data';

const Gallery = () => {
    const params = useParams()
    const thisCollection = nftData.find(collection => collection.id === params.collection)
    return (
        <div className="bg-dashboard">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-10">
                <h1 className="font-semibold text-gray-700 text-3xl">{collection.collection} Gallery</h1>
            </div>
            <div className="flex pb-10 space-x-4">
                <p className='px-4 py-1 bg-white rounded-md'>Rarity</p>
                <p className='px-4 py-1 bg-white rounded-md'>Max Offer</p>
                <p className='px-4 py-1 bg-white rounded-md'>Sort</p>
            </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {thisCollection.map((collection) => (<a key={nft.id} href={nft.href} className="group bg-white p-3 rounded-xl">
                    <Link to={`/${nft.collection}/${nft.id}`}>
                        <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={nft.imageSrc}
                                alt={nft.imageAlt}
                                className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                            <div className="absolute top-0 right-0">{nft.net}</div>
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
                                <p>Prem</p>
                                <h3 className="mt-4 text-sm text-gray-700">{nft.premium}</h3>
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

export default Gallery