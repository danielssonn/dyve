import { Link } from "react-router-dom";

const SideBar = (prop) => {
  return (
    <div className="bg-dashboard p-2 fixed left-0 top-0 w-40 sidebar">
      <div className="bg-white m-2 rounded-xl content-center">
        {/* logo */}{/* Dapp name */}
        <div className="rounded-lg p-4 text-transparent text-4xl font-extrabold bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
          <h1>Dyve</h1>
        </div>

        <nav className="p-1 grid grid-cols-1">
              <Link className="p-2 m-2 mx-auto" to="/">Gallery</Link>
              <Link className="p-2 m-2 mx-auto" to="/gallerylink">GalleryLink</Link>
              <Link className="p-2 m-2 mx-auto" to="/collections">Collections</Link>
              <Link className="p-2 m-2 mx-auto" to="/Nft">NFT</Link>
        </nav>
      </div>
    </div>
  )
}

export default SideBar
