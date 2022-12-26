import React, { useState } from 'react';
import {BiMenu} from 'react-icons/bi';

export const Navbar = () => {

  const [menu, setMenu] = useState(true);

  const onMenu = ()=>{
    setMenu(!menu)
    console.log(menu);
  }

  return (
    <header className='relative bg-green-300 h-24 flex'>
      <nav className='content flex flex-row md:h-auto justify-between items-center'>
        <div>Logo</div>
        <button 
          className='text-2xl md:hidden'
          onClick={onMenu}
        >
          <BiMenu/>
        </button>
        <div className={`${menu && "bg-gray-50 backdrop-blur-0"} md:hidden fixed inset-0 top-24 bg-gray-600/50 backdrop-blur-sm h-[calc(100vh-96px)]`}></div>
        <ul className={`${menu && '-left-full md:left-0'} absolute md:relative inset-0 top-24 md:top-0 w-3/5 md:w-auto h-[calc(100vh-96px)] md:h-auto flex flex-col md:flex-row items-center justify-center bg-red-300 transition-all ease-in-out`}>
          <li className='mb-5 md:ml-5'>Inicio</li>
          <li className='mb-5 md:ml-5'>Galeria</li>
          <li className='mb-5 md:ml-5'>Nosotros</li>
          <li className='mb-5 md:ml-5'>Contáctanos</li>
        </ul>
      </nav>
    </ header>
  )
}
