import { BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Citas from "./components/Citas";
import ServiceList from "./components/ServiceList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/service" element={<ServiceList />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
