import Header from './Header';
import Ubicacion from './Ubicacion';
import Servicios from './Servicios';
import Diesel from './Diesel';
import Ruta from "./Ruta";
import { Footer } from './Footer';

export default function Inicio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <section className="relative min-h-screen">
        {/* Video de fondo */}
        <video
          src="https://www.pexels.com/es-es/download/video/4488722/"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        />

        {/* Overlay negro semitransparente */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Header */}
        <Header />

        {/* Contenido Hero */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white pt-40 px-4">
          <h1 className="text-4xl md:text-5xl font-bold pt-2 drop-shadow-lg">
            Mecánica el Intercontinental
          </h1>
          <p className="mt-4 text-lg md:text-xl m-2 drop-shadow">
            Servicios de Auxilio en ruta 24/7
            <br />
            ¡Llegamos a donde estés!
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <a
  href="https://wa.me/56932555764?text=HOLA,%20VENGO%20DE%20LA%20PAGINA%20WEB,%20NECESITO%20UN%20MECANICO"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border border-white rounded-md hover:bg-white hover:text-black transition-colors duration-200 text-center"
>
  Auxilio Mecánico YA!
</a>
            <a
  href="https://wa.me/56932555764?text=HOLA,%20VENGO%20DE%20LA%20PAGINA%20WEB,%20NECESITO%20UN%20MECANICO"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 border  border-white rounded-md hover:bg-white hover:text-black transition-colors duration-200 text-center"
>
  Reservar una Hora
</a>
          </div>
        </div>
      </section>

      <Ubicacion />
      <Servicios />
      <Diesel />
      <Ruta />
      <Footer />
    </div>
  );
}
