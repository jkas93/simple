import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy loading components to reduce initial JS payload
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Odontology = lazy(() => import('./pages/Odontology'));
const Contact = lazy(() => import('./pages/Contact'));
const Packages = lazy(() => import('./pages/Packages'));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="loading-fallback" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/odontologia" element={<Odontology />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/paquetes" element={<Packages />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
