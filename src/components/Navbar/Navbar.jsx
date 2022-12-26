import React, { useState } from 'react';
import {BiMenu} from 'react-icons/bi';
import {IoMdClose} from 'react-icons/io';
import { Link } from 'react-router-dom';
import { listMenu } from './listMenu';

export const Navbar = () => {

  const [menu, setMenu] = useState(true);

  const onMenu = ()=>{
    setMenu(!menu)
    console.log(menu);
  }

  return (
    <header className='relative bg-green-300 h-24 flex z-50'>
      <nav className='content flex flex-row md:h-auto justify-between items-center'>
        <div>Logo</div>
        <button 
          className='text-2xl md:hidden transition-all ease-in-out'
          onClick={onMenu}
        >
          {menu ? <BiMenu/> : <IoMdClose/> }
          
        </button>
        <div className={`${menu && "bg-white "} md:hidden fixed inset-0 top-24 bg-gray-600/50 backdrop-blur-sm h-[calc(100vh-96px)]`}></div>
        <ul className={`${menu && '-left-full md:left-0'} absolute md:relative inset-0 top-24 md:top-0 w-3/5 md:w-auto h-[calc(100vh-96px)] md:h-auto flex flex-col md:flex-row items-center justify-center bg-red-300 transition-all ease-in-out`}>
          {
            listMenu.map((item, index) => (
              <Link 
                key={index}
                to = {item.path}
                className='mb-5 md:ml-5'
              >
                {item.nameRuta}
              </Link>
            ))
          }
        </ul>
      </nav>
    </ header>
  )
}
