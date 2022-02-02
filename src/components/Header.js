import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [showMenu , setShowMenu] = useState('md:hidden')

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

  return (
  <div className='text-white font-robo'>
     <div className={`flex bg-theme justify-between items-center p-4 shadow-lg ${showMenu!=='md:hidden' && 'flex-col'}`}>

        <div className='flex justify-between w-full'>
            <h1 className='text-3xl font-semibold'>Mikel-Jon (Mike) West</h1>
            <button 
            onClick={()=>{
                if(setShowMenu=='md:hidden'){
                    setShowMenu('')
                }
                else{
                    setShowMenu('md:hidden')
                }
            }}
            className='hidden md:visible md:flex'>Menu</button>
        </div>

        <div className='flex md:hidden'>

{menuItems.map((item)=>{
    return <li className='list-none mx-5'>
        <Link to={`/${item.key}`}>{item.title}</Link>
    </li>
})}

</div>

        <div className={`md:flex items-start justify-start w-100 flex-col hidden md:visible $(showMenu)`}>

            {menuItems.map((item)=>{
                return <li className='list-none mx-5'>
                    <Link to={`/${item.key}`}>{item.title}</Link>
                </li>
            })}

        </div>

     </div>
  </div>
  );
}

export default Header;
