import React, { useState } from 'react';
import logo from '../assets/logo.png';
import NavbarLinks from './NavbarLinks';
import MobileMenu from './MobileMenu';

export default function Header({ isOverlay = true }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-40">
      {/* Franja amarilla */}
     <div className="bg-[#FCF259] text-black text-center text-sm font-bold p-2">
  <p>
    <a
      href="https://wa.me/56932555764?text=Hola,%20quiero%20agendar%20una%20hora"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-700 underline"
    >
      AGENDA TU HORA
    </a>{" "}
    Y OBTÉN UN DESCUENTO GRATIS
    <br />
    <a
      href="https://wa.me/56932555764?text=Hola,%20necesito%20un%20mecánico%20ahora"
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-700"
    >
      LLAMA AHORA
    </a>
  </p>
</div>

      {/* Navbar sobre el video */}
      <div className={`${isOverlay ? 'absolute top-8' : 'relative'} left-0 w-full flex items-center justify-between px-4 py-4 md:py-6`}>

        {/* Botón hamburguesa (móvil) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl text-blue-700 md:hidden"
        >
          ☰
        </button>

        {/* Logo */}
        <div className="flex-1 flex justify-center flex-1 my-4">
          <img src={logo} alt="Logo El Intercontinental" className="w-32 md:w-40" />
        </div>

        {/* Links + botón en desktop */}
        <div className="flex gap-6 items-center">
          <NavbarLinks isMobile={false} />
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
