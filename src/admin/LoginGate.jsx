import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function LoginGate() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Si ya está logueado, directo al panel
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/admin');
      }
    });
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      // Éxito, el onAuthStateChange en Layout capturará o forzamos navigate
      navigate('/admin');
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#030006', color: '#fff' }}>
      <form onSubmit={handleLogin} style={{ background: 'rgba(15, 5, 25, 0.8)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', width: '380px' }}>
        <h2 style={{ marginBottom: '10px' }}>Área Restringida</h2>
        <p style={{ color: '#8c8c8c', marginBottom: '30px', fontSize: '14px' }}>Inicia sesión con Supabase</p>
        
        {errorMsg && <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '10px', borderRadius: '6px', fontSize: '14px', marginBottom: '20px' }}>Datos incorrectos o falla de conexión</div>}

        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
          style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '16px', marginBottom: '15px' }}
        />
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          style={{ width: '100%', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '16px', marginBottom: '25px' }}
        />
        
        <button type="submit" disabled={loading} style={{
          width: '100%', background: 'var(--primary)', color: '#fff', 
          border: 'none', padding: '15px', borderRadius: '8px', 
          fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1
        }}>
          {loading ? 'Iniciando...' : 'Acceder'}
        </button>
      </form>
    </div>
  );
}
