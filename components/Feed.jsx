import React from 'react'
import { HiOutlineSparkles } from 'react-icons/hi'
import Input from './Input'
import Post from './Post'

const Feed = ({post}) => {

  const posts= [
    {
      id: '1',
      name: "Neil Rowland",
      username: "NeilRow56",
      userImg: "/profile_pic.jpeg",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      text: "Nice View",
      timestamp: "2 hours ago"
    },
    {
      id: '2',
      name: "Janette Rowland",
      username: "JanetteRow56",
      userImg: "/profile_pic.jpeg",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60,",
      text: "Nice Vista",
      timestamp: "7 hours ago"
    }
  ]

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl" >
     <div className="flex py-2  sticky  top-0 z-50 bg-white px-0 border-b border-gray-200 items-center">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer ">Home</h2>
        <div className="hovereffect flex items-center justify-center ml-auto lg:pr-3 lg:py-3 w-12 h-12">
            <HiOutlineSparkles  />
        </div>
        
     </div>
     <Input />
      
     {posts.map(( post ) => (
      <Post key={post.id} post={post}/>
     )

     


     )}
    </div>
  )
}

export default Feed
