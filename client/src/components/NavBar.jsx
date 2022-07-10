// assets
import IMAGES from '../../images'

// icons
import { MdNotifications } from 'react-icons/md'
import { FiMoreVertical } from 'react-icons/fi'

const NavBar = (prop) => {
  return (
    <div className="flex justify-between items-center">
      {/* logo */}
      <img src={IMAGES.cibc} alt="logo" className="w-1/12 px-3" />

      {/* icons & profile */}
      <div className="xl:w-1/3 w-2/3 flex justify-end items-center">
        <div className="text-base mr-3 font-semibold text-stone-800 text-right">
          <p>Hi, {prop.userName}</p>
        </div>
        <div className="relative w-1/12 flex justify-center items-center">
          <img id="profile" src={IMAGES.face} alt="profile-image" className="w-4/5 z-10" />
          <img src={IMAGES.bg2} alt="profile-image" className="absolute w-[100%] h-[120%] z-5" />
        </div>
        <div className="bg-[#F4F5FB] rounded-full cursor-pointer mx-3">
          <MdNotifications className="text-[#5D5FEF] text-lg m-3"/>
        </div>
        <div className="bg-[#F4F5FB] rounded-full cursor-pointer mr-3">
          <FiMoreVertical className="text-[#5D5FEF] text-lg m-3"/>
        </div>

      </div>
    </div>
  )
}

export default NavBar
