import { Link } from "react-router-dom";

const TopBar = (prop) => {
  return (
    <div className="bg-dashboard p-2 sticky top-0 z-50">
      <div className="bg-white flex justify-end m-0 rounded-xl justify-between">

        <div className="rounded-lg p-4 text-transparent text-4xl font-extrabold bg-clip-text bg-gradient-to-br from-[#3926AD] to-[#C367D6]">
          <h1>Dyve</h1>
        </div>

        <div className="flex justify-start items-center">
          <h1 className="font-semibold text-lg px-6"></h1>
        </div>

        <nav className="flex justify-start items-center">
              <Link className="p-2 m-2 mx-auto" to="/dashboard">Dashboard</Link>
              <Link className="p-2 m-2 mx-auto" to="/">Gallery</Link>
              <Link className="p-2 m-2 mx-auto" to="/collections">Collections</Link>
        </nav>

        <div className="flex justify-end items-center">

          <div className="p-4 pr-0">
            <button
              className="py-2 px-6 font-semibold text-white border bg-[#0778E0] rounded-lg flex items-center"
            >
              Add Listing
            </button>
          </div>

          <div className="p-4">
            <button
              className="py-2 px-6 font-semibold text-white border bg-[#58DC4D] rounded-lg flex items-center"
            >
              Connect
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopBar
