import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/ruta/a/tu/imagen.jpg')" }}>
      <Header />
      <Navbar />
      <div className="pt-24 text-white text-center">
        <h1 className="text-4xl font-bold">Mecánica el Intercontinental</h1>
        <p className="text-lg mt-2">Servicios de Auxilio en ruta 24/7<br />Llegamos a donde estés!</p>
        <div className="mt-6 space-y-3">
          <button className="px-6 py-2 border border-white rounded-md">Auxilio Mecánico YA!</button>
          <button className="px-6 py-2 border border-white rounded-md">Reservar una Hora</button>
        </div>
      </div>
    </div>
  );
}

export default App;
