// src/components/Navbar.jsx
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 p-4 z-50">
        <button onClick={() => setMenuOpen(true)} className="text-3xl text-blue-600">
          ☰
        </button>
      </div>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
