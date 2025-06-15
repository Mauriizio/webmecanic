import { BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
