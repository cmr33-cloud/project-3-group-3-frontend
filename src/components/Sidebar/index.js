import React from 'react'
import { FaHome, FaMailBulk, FaPlus, FaQuestion, FaSignOutAlt} from 'react-icons/fa'
const Sidebar = () => {


    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-300 text-white shadow-sm z-10'>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <SideBarIcon text='home'  href='./dashboard'icon={<FaHome size='28' data-testid ="home-icon"/>}/>
            <SideBarIcon text='create new game'  href='./newgame'icon={<FaPlus size='28' data-testid ="create-icon"/>}/>
            <SideBarIcon text='about' href='./about' icon={<FaQuestion size ='28' data-testid="about-icon"/>}/>
            <SideBarIcon text='contact' href = './contact' icon={<FaMailBulk size ='28' data-testid="contact-icon"/>}/>
            <SideBarIcon text='log out' href = './logout' icon={<FaSignOutAlt size ='28' data-testid="logout-icon"/>}/>
            
        </div>
    )
}
const SideBarIcon = ({icon, text='tooltip', href}) => (
    <div className = 'sidebar-icon group z-20 mt-2 mb-2' >
        
        <div onClick={() => window.location.href=`${href}`}>

        {icon}
        </div>
        <span class='sidebar-tooltip group-hover:scale-100 '>
            {text}
        </span>
    </div>
)

export default Sidebar
