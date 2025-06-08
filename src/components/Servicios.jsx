// src/components/Servicios.jsx
import React from 'react';
import videoServicio from '../assets/videos/servicio-domicilio.mp4'; // Ruta real del video
import imagen1 from '../assets/mecanica-domicilio-1.jpeg';         // Ruta real de la imagen

export default function Servicios() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Video background sticky */}
      <video
        src={videoServicio}
        autoPlay
        loop
        muted
        className="absolute top-0 w-full h-[80vh] object-cover z-0"
      />

      {/* Overlay semitransparente sobre el video */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Contenedor del contenido que se desplaza por encima del video */}
     <div className="z-10 max-w-4xl w-full px-4 flex flex-col items-center gap-8 scale-75">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Mecánica a Domicilio
        </h2>

        {/* Lista de servicios */}
        <ul className="text-white text-lg space-y-2">
          <li>– Cambio de aceite a domicilio</li>
          <li>– Reparación de frenos a domicilio</li>
          <li>– Diagnóstico electrónico en ruta</li>
          <li>– Mantenimiento preventivo móvil</li>
        </ul>

        {/* Imagen intermedia */}
        <img
   src={imagen1}
   alt="Reparación a domicilio"
   className="w-full max-w-sm h-auto rounded-lg shadow-lg"
 />

        {/* Botón de llamada a la acción */}
        <button className="w-max px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 m-4">
          Mecánica a Domicilio
        </button>
      </div>
    </section>
  );
}
