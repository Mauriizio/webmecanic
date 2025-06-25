import Header from './Header';
import generalimg from '../assets/generalimg.jpg';
import mantenimientoimg from '../assets/mantenimiento.jpg';
import diagnosticoimg from '../assets/diagnostico.jpg';
import neumaticosimg from '../assets/neumaticos.jpg';
import { Footer } from './Footer';

export default function ServiceList() {
  return (
    <div className="relative min-h-screen bg-green-100">
      <Header isOverlay={false} />

      <main className="flex flex-col items-center justify-center text-center px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold underline mb-8">
          Nuestros Servicios:
        </h2>

        <div className="w-full max-w-5xl space-y-16">
          {/* Servicio: Mecánica General */}
          <ServiceBlock
            title="MECÁNICA GENERAL"
            image={generalimg}
            items={[
              'Reparación de vehículos en ruta',
              'Servicio de grúa',
              'Auxilio Mecánico 24/7',
              'Reparación de motores gasolina y diésel',
              'Diagnóstico de fallas y fugas'
            ]}
          />

          {/* Servicio: Mantenimiento Preventivo */}
          <ServiceBlock
            title="MANTENIMIENTO PREVENTIVO"
            image={mantenimientoimg}
            items={[
              'Cambio de aceite y filtros',
              'Sistema de frenos (pastillas y discos)',
              'Limpieza de inyectores',
              'Revisión de niveles y fluidos',
              'Baterías y correas'
            ]}
          />

          {/* Servicio: Diagnóstico Electrónico */}
          <ServiceBlock
            title="DIAGNÓSTICO ELECTRÓNICO"
            image={diagnosticoimg}
            items={[
              'Escáner computarizado',
              'Reset de luces (check engine, ABS, etc.)',
              'Revisión de sensores',
              'Diagnóstico de centralitas y ECU',
              'Codificación de llaves'
            ]}
          />

          {/* Servicio: Neumáticos y Suspensión */}
          <ServiceBlock
            title="NEUMÁTICOS Y SUSPENSIÓN"
            image={neumaticosimg}
            items={[
              'Suspensión y amortiguadores',
              'Alineación y balanceo',
              'Cambio de neumáticos',
              'Revisión de rótulas y terminales',
              'Inflado y control de presión'
            ]}
          />
        </div>

        <p className="mt-16 text-lg md:text-xl bg-blue-200 text-black rounded-xl px-6 py-10 font-bold w-full max-w-5xl flex flex-col justify-center align-center">
          Ofrecemos servicios mecánicos especializados.
          <br />Puedes agendar tu cita o contactarnos directamente
          <br />por WhatsApp o teléfono.
          <a
  href="https://wa.me/56932555764?text=HOLA,%20VENGO%20DE%20LA%20PAGINA%20WEB,%20NECESITO%20UN%20MECANICO"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
>
  Mecanico YA!
</a>
          </p>
          
        

        
      </main>

      <Footer />
    </div>
  );
}

function ServiceBlock({ title, image, items }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white rounded-xl shadow-lg overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 p-6 sm:p-8 md:p-10 text-center">
        <h3 className="text-xl md:text-3xl font-bold drop-shadow-lg mb-6">
          {title}
        </h3>

        <ul className="bg-blue-500/50 max-w-3xl mx-auto p-4 rounded-xl text-left text-base md:text-lg font-semibold list-disc list-inside space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="drop-shadow-sm text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
