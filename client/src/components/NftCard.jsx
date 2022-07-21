import { Link } from "react-router-dom";

const NftCard = (prop) => {
  return (
   <>
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
   </>
  )
}

export default NftCard