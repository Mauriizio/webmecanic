import Header from "./Header";
import fondo from '../assets/fondocontac.jpg';
import { Footer } from "./Footer";

export default function Contacto() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      {/* Overlay oscuro sutil */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Contenido encima del overlay */}
      <div className="relative z-10 flex flex-col justify-center align-center">
        <Header isOverlay={false} />

        <h2 className="text-center text-white font-bold text-3xl">Contacto Rápido</h2>
        <p className="text-center text-white font-bold text-l m-4">
          Agende su servicio y contáctenos a través de WhatsApp.
        </p>

        <form
          action="https://formsubmit.co/elintercontinental@gmail.com"
          method="POST"
          className="max-w-md mx-auto space-y-6 bg-gray-500 p-6 rounded-2xl shadow-lg m-10"
        >
          {/* Configuración para FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="tunombre@correo.com"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Escribe tu mensaje..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            Enviar
          </button>
        </form>

        <Footer />
      </div>
    </div>
  );
}
