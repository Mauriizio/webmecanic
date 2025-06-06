// src/App.jsx
import React from 'react';
import Header from './components/Header';
import fondoVideo from './assets/videos/llanta.mp4'; // importa el video que descargaste

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 1) Video de fondo */}
      <video
        src={fondoVideo}
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* 2) Overlay semi-transparente opcional (para oscurecer un poco el video) */}
      <div className="fixed inset-0 bg-black/50 z-15"></div>

      {/* 3) Header (franja amarilla + navbar) */}
      <Header />

      {/* 4) Contenido “hero” encima del video */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white pt-32 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Mecánica el Intercontinental
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Servicios de Auxilio en ruta 24/7<br />¡Llegamos a donde estés!
        </p>

        <div className="mt-8 space-y-4 md:space-y-0 md:space-x-6">
          <button className="block w-full md:inline-block md:w-auto px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-200">
            Auxilio Mecánico YA!
          </button>
          <button className="block w-full md:inline-block md:w-auto px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-200">
            Reservar una Hora
          </button>
        </div>
      </div>

      {/* 5) Aquí luego irían secciones adicionales (Servicios, Contacto, etc.) */}
    </div>
  );
}

export default App;
