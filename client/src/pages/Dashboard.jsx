import React from 'react'
import { useParams } from 'react-router-dom'

import {nfts as nftData} from '../data'

const Dashboard = () => {
    const params = useParams()
    console.log(params)
    console.log(nftData)
    const thisNFT = nftData.find(nft => nft.id === parseInt(params.id))
    console.log(thisNFT)

    return (
        <div className="bg-dashboard">
            <p>Dashboard</p>
        </div>
    )
}

export default Dashboard