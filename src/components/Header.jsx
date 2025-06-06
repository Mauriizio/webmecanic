// src/components/Header.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import NavbarLinks from './NavbarLinks';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-40">
      {/* 1) Franja amarilla superior, siempre visible */}
      <div className="bg-yellow-400 text-black text-center text-sm font-bold p-2">
        <p>
          <span className="text-blue-700 underline">AGENDA TU HORA</span> Y OBTÉN UN DESCUENTO GRATIS
          <br />
          <span className="underline text-blue-700">LLAMA AHORA</span>
        </p>
      </div>

      {/* 2) Navbar transparente (sobre el video) */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-4 md:py-6">
        {/* 2.1) Botón hamburguesa (sólo visible en móvil) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl text-white md:hidden"
        >
          ☰
        </button>

        {/* 2.2) Logo en el centro (visible en todas las pantallas) */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img src={logo} alt="Logo El Intercontinental" className="w-32 md:w-40" />
        </div>

        {/* 2.3) Enlaces + botón “AUXILIO EN RUTA YA!” (sólo visible en desktop) */}
        <div className="flex-1 flex justify-end">
          <NavbarLinks isMobile={false} />
        </div>
      </div>

      {/* 3) Menú móvil desplegable */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
