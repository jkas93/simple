import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Odontology from './pages/Odontology';
import Contact from './pages/Contact';
import Packages from './pages/Packages';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/odontologia" element={<Odontology />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/paquetes" element={<Packages />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
