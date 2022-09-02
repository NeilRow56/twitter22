import React from 'react'
import Image from 'next/image'
import { HiOutlineEmojiHappy, HiOutlinePhotograph } from 'react-icons/hi'

const Input = () => {
  return (
    <div className='flex flex-col w-full border-b border-gray-200 p3 space-x-3'>
    <div className="flex ">
      <div className='mr-3'>
      <Image className="  rounded-full cursor-pointer hover:brightness-90" src="/profile_pic.jpeg" alt="twitter perona imagelogo" width={44} height={44}/>
      </div>
      <div className='w-full '>
        
        <textarea
                className="w-full border-none focus:ring-0 text-lg tracking-wide placeholder min-h-[50px] text-gray-700 "
                rows="2"
                placeholder="What's happening?"
                
              ></textarea>
        </div>
        </div>
      
        <div className='flex border-t border-gray-200 items-center justify-between p-1.5'>
            <div className=" flex">
                < HiOutlinePhotograph className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"  />
                <HiOutlineEmojiHappy hoverEffect p-2  className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />

            </div>
            <button className=" bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50" >Tweet</button>
        </div>
      
      </div>
  )
}

export default Input

