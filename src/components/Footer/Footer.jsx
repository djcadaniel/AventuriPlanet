import {BsPinterest} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className='flex justify-evenly items-center bg-green-500 p-2'>
      <div className='flex gap-4'>
        <div className='text-4xl text-blue-600'>
          <a href=""><BsPinterest /></a>
        </div>
        <div className='text-4xl text-blue-600'>
          <a href=""><AiFillInstagram /></a>
        </div>
        <div className='text-4xl text-blue-600'>
          <a href=""><BsFacebook /></a>
        </div>
        <div className='text-4xl text-blue-600'>
          <a href=""><AiFillYoutube /></a>
        </div>
      </div>
      <div className='text-white flex flex-col items-center justify-center'>
        <p>Todos los derechos reservados 2022 @ AventuriPlanet</p>
        <p>Desarrollado por Daniel Castro <span>Portafolio</span> </p>
      </div>
    </footer>
  )
}
