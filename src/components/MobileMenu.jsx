// src/components/MobileMenu.jsx
import logo from '../assets/logo.jpg';

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center p-6">
      <button onClick={onClose} className="self-start text-4xl text-blue-600 mb-4">
        ✕
      </button>
      <img src={logo} alt="Logo" className="w-32 mb-6" />
      <nav className="flex flex-col items-center gap-4 text-blue-600 text-lg font-medium">
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
        <a href="#citas">Citas</a>
      </nav>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full font-bold">
        AUXILIO EN RUTA YA!
      </button>
    </div>
  );
}
