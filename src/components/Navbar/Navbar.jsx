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
  const onMenu2 =()=>{
    if(!menu){
      setMenu(!menu)
    }
  }

  return (
    <header className=' relative bg-primary h-24 flex z-50'>
      <nav className='content  md:h-auto '>
        <div className='fixed top-0 left-0 right-0 flex flex-row justify-between items-center h-24 bg-primary px-5'>
          <div className='text-text-blanco'>Logo</div>
          <button 
            className='text-2xl md:hidden transition-all ease-in-out'
            onClick={onMenu}
          >
            {menu ? <div className='text-white'><BiMenu /></div> : <div className='text-white'><IoMdClose /></div> }
          </button>
          <div 
            className={`${menu && "opacity-0"} md:hidden fixed inset-0 top-24 bg-gray-600/50 backdrop-blur-sm h-[calc(100vh-96px)]`}
            onClick={(menu)=>onMenu2(menu)}
          >
          </div>
          <ul className={`${menu && '-left-full md:left-0'} absolute md:relative inset-0 top-24 md:top-0 w-3/5 md:w-auto h-[calc(100vh-96px)] md:h-auto flex flex-col items-center justify-center md:flex-row transition-all ease-in-out text-text-blanco bg-primary`}>
            {
              listMenu.map((item, index) => (
                <div key={index}>
                  <Link 
                    to = {item.path}
                    className='mb-5 md:ml-5'
                    onClick={onMenu}
                  >
                    {item.nameRuta}
                  </Link>
                </div>
              ))
            }
          </ul>
        </div>
      </nav>
    </ header>
  )
}
