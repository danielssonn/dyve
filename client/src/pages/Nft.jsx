import React from 'react'
import { useParams } from 'react-router-dom'

import {nfts as nftData} from '../data'

const Nft = () => {
    const params = useParams()
    console.log(params)
    console.log(nftData)
    const thisNFT = nftData.find(nft => nft.id === parseInt(params.id))
    console.log(thisNFT)

    return (
        <div className="bg-dashboard">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={thisNFT.imageSrc}
                                alt={thisNFT.imageAlt}
                                className="w-full h-full object-center object-cover group-hover:opacity-75"
                            />
                            <div className="absolute top-0 right-0">{thisNFT.net}</div>
                        </div>
                        <div className='w-full flex'>
                            <h3 className="mt-4 text-sm text-gray-700">{thisNFT.collection}</h3>
                            <h3 className="mt-4 text-sm text-gray-700">#{thisNFT.id}</h3>
                        </div>
                        <div className='flex w-full
space-x-3'>
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
            <p>additional content</p>
        </div>
    )
}

export default Nft