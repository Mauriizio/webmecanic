// src/components/Ruta.jsx
import React from 'react';
import imagenMecanica from '../assets/mecanica-domicilio-2.jpeg';         // Ruta real de la imagen

export default function Ruta() {
  return (
    <section className="relative overflow-hidden min-h-screen flex justify-center p-2 pt-8">
      {/* Video background sticky */}
      <video
        src="https://www.pexels.com/es-es/download/video/25397932/"
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
          Mecánico en Ruta
        </h2>

        {/* Lista de servicios */}
        <ul className="text-white text-lg space-y-2">
          <li>– En todo Santiago llegamos en Minutos</li>
          <li>– Auxilio Mecanico 24/7</li>
          <li>– Reparacion en Carretera</li>
          <li>– Asistencia para camiones y vehículos ligeros</li>
        </ul>

        {/* Imagen intermedia */}
        <img
   src={imagenMecanica}
   alt="Servicio de mecánica diesel para camiones y maquinaria pesada"
   className="w-full max-w-sm h-auto rounded-lg shadow-lg"
 />

        {/* Botón de llamada a la acción */}
        <a
  href="https://wa.me/56932555764?text=HOLA,%20VENGO%20DE%20LA%20PAGINA%20WEB,%20NECESITO%20UN%20MECANICO"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
>
  Mecanico YA!
</a>
      </div>
    </section>
  );
}
