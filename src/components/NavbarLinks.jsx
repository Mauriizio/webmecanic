// src/components/NavbarLinks.jsx
import React from 'react';

export default function NavbarLinks({ isMobile = false }) {
  // isMobile: si queremos estilos específicos para mobile vs desktop
  // Pero en este caso usaremos las mismas clases Tailwind básicas
  return (
    <div className={`${isMobile ? 'flex flex-col items-center gap-6' : 'hidden md:flex items-center gap-8'}`}>
      {/* En desktop hidden hasta md, luego flex. En mobile el contenedor se mostrará dentro de MobileMenu */}
      <a href="#servicios" className="text-blue-600 text-lg font-medium hover:underline">
        Servicios
      </a>
      <a href="#contacto" className="text-blue-600 text-lg font-medium hover:underline">
        Contacto
      </a>
      <a href="#citas" className="text-blue-600 text-lg font-medium hover:underline">
        Citas
      </a>
      <button className="mt-2 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors duration-200">
        AUXILIO EN RUTA YA!
      </button>
    </div>
  );
}
