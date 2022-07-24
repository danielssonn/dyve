import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { nfts as nftData } from '../data'
import { nftCollections } from '../data';

const Gallery = () => {
  const params = useParams()
  const thisCollection = nftData.find(nft => nft.collection === params.collection)

  return (
        <div className="">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="py-10">
                    <h1 className="mt-4  text-3xl">Gallery</h1>
                </div>
                <div className="flex pb-10 space-x-4">
                    <p className='px-4 py-1 bg-white rounded-md'>Rarity</p>
                    <p className='px-4 py-1 bg-white rounded-md'>Max Offer</p>
                    <p className='px-4 py-1 bg-white rounded-md'>Sort</p>
                    <p className='px-4 py-1 bg-white rounded-md'>Alphabetical</p>
                </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {thisCollection.map((nft) => (<a key={nft.id} href={nft.href} className="group bg-white p-3 rounded-xl">
                    <Link to={`/${nft.collection}/${nft.id}`}>
                        <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={nft.imageSrc}
                                alt={nft.imageAlt}
                                className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                            <div className="absolute top-0 right-0">{nft.net}</div>
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

export default Gallery
