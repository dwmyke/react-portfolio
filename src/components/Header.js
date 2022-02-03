import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

function Header() {

    const [showMenu, setShowMenu] = useState("md:hidden");

    const menuItems = [
        {
            title: 'Home',
            key:'/'
        },
        {
            title: 'Projects',
            key:'/projects'
        },
        {
            title: 'Contact',
            key:'/contact'
        },
        {
            title: 'Skills',
            key:'/skills'
        },
    ];

    const pathname = window.location.pathname;

  return (
  <div className='text-white font-robo fixed inset-0 z-50'>
     <div className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu == "" && "md:flex-col"
        } `}>

<div className="flex justify-between items-center w-full">
            <h1 className='text-3xl font-semibold'>Mikel-Jon (Mike) West</h1>

            <FaBars onClick={() => {
                if (showMenu == "md:hidden") {
                  setShowMenu("");
                } else {
                  setShowMenu("md:hidden");
                }
              }}
            className='hidden md:visible md:flex cursor-pointer'/>
        </div>

        <div className='flex md:hidden'>

{menuItems.map((item)=>{
    return <li className={`list-none mx-5 p-2 ${item.key==pathname && 'bg-white text-black rounded-md'}`}>
        <Link to={`${item.key}`}>{item.title}</Link>
    </li>
})}

</div>

<div
          className={`mt-3 md:flex items-start justify-start w-full flex-col hidden md:visible ${showMenu}`}
        >

            {menuItems.map((item)=>{
                return <li className={`list-none py-1 ${item.key==pathname && 'bg-white text-black rounded-md px-2'}`}>
                    <Link to={`${item.key}`}>{item.title}</Link>
                </li>
            })}

        </div>

     </div>
  </div>
  );
}

export default Header;
