import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy loading components to reduce initial JS payload
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Odontology = lazy(() => import('./pages/Odontology'));
const Contact = lazy(() => import('./pages/Contact'));

// Admin Routes
const LoginGate = lazy(() => import('./admin/LoginGate'));
const AdminLayout = lazy(() => import('./admin/AdminLayout'));
const Dashboard = lazy(() => import('./admin/pages/Dashboard'));
const Leads = lazy(() => import('./admin/pages/Leads'));

function App() {
  return (
    <>
      <main>
        <Suspense fallback={<div className="loading-fallback" />}>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Home />
              </>
            } />
            <Route path="/servicios" element={<><Navbar /><Services /></>} />
            <Route path="/odontologia" element={<><Navbar /><Odontology /></>} />
            <Route path="/contacto" element={<><Navbar /><Contact /></>} />
            
            {/* Rutas del Admin */}
            <Route path="/admin/login" element={<LoginGate />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="leads" element={<Leads />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
