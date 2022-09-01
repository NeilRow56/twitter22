import React from 'react'
import { HiOutlineSparkles } from 'react-icons/hi'

const Feed = () => {
  return (
    <div className=" sm:ml-[73px] lg:ml-[370px] border-l border-r border-gray-200 lg:min-w-[576px] flex-grow max-w-xl">
     <div className="flex py-2  sticky  top-0 z-50 bg-white px-0 border-b border-gray-200 items-center">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer ">Home</h2>
        <div className="hoverEffect flex items-center justify-center ml-auto lg:pr-3 lg:py-3 w-12 h-12">
            <HiOutlineSparkles  />
        </div>
        
     </div>
    </div>
  )
}

export default Feed
