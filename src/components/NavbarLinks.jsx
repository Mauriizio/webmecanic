// src/components/NavbarLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';


export default function NavbarLinks({ isMobile = false }) {
  // isMobile: si queremos estilos específicos para mobile vs desktop
  // Pero en este caso usaremos las mismas clases Tailwind básicas
  return (

    <div className={`${isMobile ? 'flex flex-col items-center gap-6 ' : 'hidden md:flex items-center gap-8'}`}>
      {/* En desktop hidden hasta md, luego flex. En mobile el contenedor se mostrará dentro de MobileMenu */}

     <Link to={"/service"} className='px-4 py-2 rounded-md text-blue-600 text-lg font-medium hover:underline text-bold hover:bg-white hover:text-blue-700 transition-colors duration-200'>
      Servicios
      </Link>

      <Link to={"/contacto"} className='px-4 py-2 rounded-md text-blue-600 text-lg font-medium hover:underline text-bold hover:bg-white hover:text-blue-700 transition-colors duration-200'>
      Contacto
      </Link>

      <Link to={"/citas"} className='px-4 py-2 rounded-md text-blue-600 text-lg font-medium hover:underline text-bold hover:bg-white hover:text-blue-700 transition-colors duration-200'>
      Citas</Link>

      <a href='tel:+56932555764'className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold whitespace-nowrap hover:bg-blue-700 transition-colors duration-200 flex flex-col justify-center items-center">
    <PhoneCall className="w-5 h-5" />AUXILIO EN RUTA YA! 
      </a>
    </div>
  );
}
