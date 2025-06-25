// src/components/Diesel.jsx
import React from 'react';
import videoServicio2 from '../assets/videos/diesel.mp4'; // Ruta real del video
import imagen2 from '../assets/diesel.jpg';         // Ruta real de la imagen

export default function Diesel() {
  return (
    <section className="relative overflow-hidden flex justify-center p-2 pt-8 ">
      {/* Video background sticky */}
      <video
        src={videoServicio2}
        autoPlay
        loop
        muted
        className="absolute top-0 w-full min-h-screen max-h-full object-cover z-0"
      />

      {/* Overlay semitransparente sobre el video */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Contenedor del contenido que se desplaza por encima del video */}
     <div className="z-10 max-w-4xl w-full px-4 flex flex-col items-center gap-8 pt-0">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Mecánica Diesel
        </h2>

        {/* Lista de servicios */}
        <ul className="text-white text-lg space-y-2">
          <li>– Maquinaria Pesada</li>
          <li>– Mecanica Agricola</li>
          <li>– Escáner para motores Cummins</li>
          <li>– Todo tipo de Camiones</li>
        </ul>

        {/* Imagen intermedia */}
        <img
   src={imagen2}
   alt="Servicio de mecánica diesel para camiones y maquinaria pesada"
   className="w-full max-w-sm h-auto rounded-lg shadow-lg"
 />

        {/* Botón de llamada a la acción */}
        <a
  href="https://wa.me/56932555764?text=HOLA,%20VENGO%20DE%20LA%20PAGINA%20WEB,%20NECESITO%20UN%20MECANICO"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 mb-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
>
  Llama Ahora
</a>
      </div>
    </section>
  );
}
