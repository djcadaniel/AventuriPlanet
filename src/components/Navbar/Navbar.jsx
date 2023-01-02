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
    <header className='sticky inset-0 lg:block md:relative bg-primary h-24 flex z-50 font-Montserrat'>
      <nav className='content  md:h-auto'>
        <div className=' flex flex-row justify-between items-center h-24 bg-primary px-5'>
          <div className='text-text-blanco'>
            <Link to='/'>
            Logo
            </Link>
          </div>
          <button 
            className='text-2xl md:hidden transition-all ease-in-out'
            onClick={onMenu}
          >
            {menu ? <div className='text-white'><BiMenu /></div> : <div className='text-white'><IoMdClose /></div> }
          </button>
          <div 
            className={`${menu && "opacity-0"} md:hidden fixed inset-0 top-20 bg-green-600/50 backdrop-blur-sm min-h-screen`}
            onClick={onMenu2}
          >
          </div>
          <ul className={`${menu && '-left-full md:left-0'} absolute md:relative inset-0 md:top-0 w-3/5 md:w-auto h-[calc(100vh-0px)] md:h-auto flex flex-col items-center justify-center md:flex-row transition-all ease-in-out text-text-blanco bg-primary`}>
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
