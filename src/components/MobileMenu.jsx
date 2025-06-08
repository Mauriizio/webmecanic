// src/components/MobileMenu.jsx
import React from 'react';
import logo from '../assets/logo.png';  
import NavbarLinks from './NavbarLinks';

export default function MobileMenu({ isOpen, onClose }) {
  // Si no está abierto, no renderiza nada (null)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center p-6">
      {/* Botón cerrar (X) en la esquina superior izquierda */}
      <button
        onClick={onClose}
        className="self-start text-4xl text-blue-600 mb-6 hover:text-blue-800 transition-colors duration-200"
      >
        ✕
      </button>

      {/* Logo centrado */}
      <img src={logo} alt="Logo El Intercontinental" className="w-32 mb-8" />

      {/* Aquí inyectamos los links en modo mobile */}
      <NavbarLinks isMobile={true} />
    </div>
  );
}
