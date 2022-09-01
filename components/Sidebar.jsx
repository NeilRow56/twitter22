import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import { HiHome, HiOutlineHashtag, HiOutlineBell, HiOutlineInboxIn, HiOutlineBookmark, HiOutlineClipboard, HiOutlineUser, HiOutlineDotsCircleHorizontal, HiOutlineDotsHorizontal} from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 lg:items-start fixed h-full">
        {/* Twitter logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
      <Image width={50} height={50} src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitter logo" />
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 lg:items-start space-y-3 ">
      <SidebarMenuItem text="Home" Icon={HiHome} active />
      <SidebarMenuItem text="Explore" Icon={HiOutlineHashtag}  />
        <SidebarMenuItem text="Notifications" Icon={HiOutlineBell}  />
        
        <SidebarMenuItem text="Messages" Icon={HiOutlineInboxIn}  />
        <SidebarMenuItem text="Bookmarks" Icon={HiOutlineBookmark}  />
        <SidebarMenuItem text="Lists" Icon={HiOutlineClipboard}  />
        <SidebarMenuItem text="Profile" Icon={HiOutlineUser}  />
        <SidebarMenuItem text="More" Icon={HiOutlineDotsCircleHorizontal}  />
        </div>

       
        {/* Button */}

        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden lg:inline">Tweet</button>

        {/* Mini-Profile */}

        < div className="hoverEffect text-gray-500 lg:justify-start  flex items-center justify-center mt-auto p-2 ">
        <Image className="rounded-full lg:mr-2"  width={40} height={40} src="/profile_pic.jpeg" alt="twitter perona imagelogo" />
        <div className="leading-5 hidden lg:inline">
              <h4 className="font-bold ml-3">User Name</h4>
              <p className="text-gray-500 ml-3">@current User</p>
        </div>
            < HiOutlineDotsHorizontal className="h-5 lg:ml-8 hidden lg:inline " />
        
        </div>
        
    </div>

  )
}

export default Sidebar
