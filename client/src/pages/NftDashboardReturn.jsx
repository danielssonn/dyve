import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom'

import {nfts as nftData} from '../data'
import {nftCollections} from '../data'
import {openListings} from '../data';

import { ModalDyveSuccess } from "../components";

import dyveHelmet from '../img/dyve-goggles.svg'

const NftDashboardReturn = () => {
    const params = useParams()
    const thisNFT = openListings.find(nft => nft.id === parseInt(params.id))
    const thisCollection = nftCollections.find(collection => collection.collection === params.collection)

    // 👇️ initialize state to default checked radio button
    const [selected, setSelected] = useState('in');
  
    const handleChange = event => {
      console.log(event.target.value);
      setSelected(event.target.value);
    };
    
    return (
        <div className="">
            {/* Collection Header */}
            <div className="flex max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-baseline justify-between">
                <div className="flex items-center align-middle items-baseline">
                    
                </div>
                <Link to={`/dashboard/borrower/open`}>
                    <button
                        className="py-2 px-6 font-semibold bg-white text-[#0778E0] rounded-lg flex items-center relative right mt-6 hover:opacity-75"
                            >
                                Back to Dashboard
                    </button>
                </Link>
            </div>
            {/* Page Title */}
            <div className="flex justify-end max-w-2xl m-auto pb-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center">
                <div className="text-left pr-6 w-full space-y-2">
                    <h2 className="font-semibold text-3xl">Choose Return Method</h2>
                </div>
            </div>
            {/* Main Body */}
            <div className="grid grid-cols-2 gap-10 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-between">
                <div className="py-4 w-1/2 space-y-3">
                    <div className="width-full flex mt-4">
                        <input id="radio-dyve-in"
                            name="return-selection"
                            type="radio"
                            value="in"
                            checked={selected === 'in'}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="radio-dyve-in" name="return-selection"className="font-semibold text-lg">Dyve in!</label>
                    </div>
                    <p className="text-left text-sm mt-1">Let Dyve buy the required NFT and close the position for you!</p>
                    <p className="text-left text-xs mt-1">Best close price Dyve can find</p>
                    <h3 className="text-left text-3xl font-semibold">Ξ6</h3>
                    <div className="">
                        <div className="width-full flex pt-5">
                        <input id="radio-dyve-out"
                            name="return-selection"
                            type="radio"
                            className="mr-2"
                            value="out"
                            onChange={handleChange}
                            checked={selected === 'out'}
                        />
                        <label htmlFor="radio-dyve-out" className="font-semibold text-lg">Dyve out!</label>
                    </div>
                    <p className="text-left text-xs mt-1">Let me choose one from my wallet below.</p>
                    
                    </div>
                </div>
                <div className="w-1/2"><img src={dyveHelmet} alt="Dyve" className="mx-auto" /></div>
            </div>
            {/* Execute Contract button */}
            <div className="flex justify-end max-w-2xl m-auto py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8 items-center">
                <div className="text-right pr-6 w-3/4 lg:w-2/4">
                    <p className="text-xs"></p>
                </div>
                <ModalDyveSuccess />
            </div>
        </div>
    )
}

export default NftDashboardReturn