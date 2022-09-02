import Image from "next/image"
import { HiOutlineChartBar, HiOutlineChat, HiOutlineDotsHorizontal, HiOutlineHeart, HiOutlineShare, HiOutlineTrash } from "react-icons/hi"

const Post = ({ post }) => {
  return (
    
    
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* Use Image */}
           <img className="h-11 w-11 rounded-full mr-4" src={ post.userImg} alt = "user image"  /> 

        {/* Right Side */}
        <div>

            {/* Header */}

            <div className="flex items-center justify-between">
                {/* Post - User Info */}
                <div className="flex items-center space-x-2  whitespace-nowrap">
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                    <span className="text-sm sm:text-[15px]">@{post.username} - </span>
                    <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
                </div>

                {/* Dot Icon */}
                < HiOutlineDotsHorizontal className="h-10 hovereffect w-10 hover:bg-sky-100 text-sky-500  p-2"/> 
            </div>

            {/* Post text */}
            <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>

            {/* Post Image */}
            <img className="rounded-2xl mr-2 w-full" src={post.img} alt = "post image"   />
            {/* Icons */}

            <div className="flex justify-between text-gray-500 p-2">
            < HiOutlineChat className="h-9 w-9 hovereffect p-2 hover:text-sky-500 hover:bg-sky-100" />  
            < HiOutlineTrash className="h-9 w-9 hovereffect p-2 hover:text-red-600 hover:bg-red-100" />
            < HiOutlineHeart className="h-9 w-9 hovereffect p-2 hover:text-red-600 hover:bg-red-100"  />
            < HiOutlineShare className= "h-9 w-9 hovereffect p-2 hover:text-sky-500 hover:bg-sky-100" />
            < HiOutlineChartBar className="h-9 w-9 hovereffect p-2 hover:text-sky-500 hover:bg-sky-100"  />
            </div>
            <div>

            </div>

        </div>
        
        
    </div>
    
  )
}

export default Post
