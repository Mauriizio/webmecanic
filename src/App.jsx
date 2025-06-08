import React from 'react';
import Header from './components/Header';
import fondoVideo from './assets/videos/llanta.mp4';
import Ubicacion from './components/Ubicacion';

function App() {
  return (
    <div className="relative min-h-screen">

       <section className="relative min-h-screen ">
      {/* Video de fondo */}
      <video
        src={fondoVideo}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Overlay negro semitransparente */}
      <div className="fixed inset-0 bg-black/50 z-15"></div>

      {/* Header (franja amarilla + navbar) */}
      <Header />

      {/* Contenido Hero */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white pt-40 px-4">
        <h1 className="text-4xl md:text-5xl font-bold pt-2">
          Mecánica el Intercontinental
        </h1>
        <p className="mt-4 text-lg md:text-xl m-2">
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
      </section>


         <Ubicacion />
      

      {/* Aquí puedes incluir más secciones (Servicios, Contacto, Footer, etc.) */}
    </div>
  );
}

export default App;
