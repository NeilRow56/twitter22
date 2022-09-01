import React from 'react'

const SidebarMenuItem = ({text, Icon, active }) => {
  return (
    <div className="hoverEffect flex items-center text-gray-500 justify-center lg:justify-start  text-lg space-x-3 ">
        <Icon className="h-7" />
        <span className={`${active && "font-bold"} hidden lg:inline` }>{text}</span>
    </div>
  )
}

export default SidebarMenuItem
