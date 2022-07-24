{/* NFT Card */}

const NftCardVertical = () => {
  const [showModal, setShowModal] = useState(false);
  
  const params = useParams()
  const thisNFT = openListings.find(nft => nft.id === parseInt(params.id))
  const thisCollection = nftCollections.find(collection => collection.collection === params.collection)

  return (
   <div className="max-w-2/3 group">
      <div className="flex bg-white p-3 rounded-xl">
         <div className="relative w-2/3 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={thisNFT.imageSrc}
              alt={thisNFT.imageAlt}
              className="w-full h-full object-center object-cover"
            />
         </div>
         <div className='px-6 py-6 w-full space-y-4 align-middle'>
              <div className='w-full'>
                <h1 className="font-semibold text-2xl text-gray-700">
                  #{thisNFT.id}</h1>
              </div>
              <div className='w-full flex justify-between'>
                <p>Collateral</p>
                <h3 className="text-gray-700 font-semibold">
                  Ξ{thisNFT.collateral}</h3>
              </div>
              <div className='w-full flex justify-between'>
                <p>Best Offer</p>
                <h3 className="text-gray-700 font-semibold">
                  Ξ{thisNFT.bestOffer}</h3>
              </div>
              <div className='w-full flex justify-between'>
                <p>Premium/day</p>
                <h3 className="text-gray-700 font-semibold">
                  Ξ{thisNFT.premium}</h3>
              </div>
              <div className='w-full flex justify-between'>
                <p>Return Condition</p>
                <h3 className="text-gray-700 font-semibold">
                  Any NFT</h3>
              </div>
         </div>
      </div>
   </div>
  )
}

export default NftCardVertical
