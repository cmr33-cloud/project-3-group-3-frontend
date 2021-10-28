import React from 'react'

const SideBarIcon = ({icon, text='tooltip'}) => (
    <div className = 'sidebar-icon group z-20 mt-2 mb-2' >
        
        <div>

        {icon}
        </div>
        <span class='sidebar-tooltip group-hover:scale-100 '>
            {text}
        </span>
    </div>
)
export default SideBarIcon