import { useState, useEffect } from 'react';
import { getLeads } from '../config/firebase';
import styles from './Admin.module.css';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Una contraseña simple para proteger la vista básica
  const ADMIN_PASS = "admin123"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setError('Contraseña incorrecta');
    }
  };

  const fetchLeads = async () => {
    setLoading(true);
    const data = await getLeads();
    setLeads(data);
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.adminContainer}>
        <div className={styles.loginCard}>
          <h2>Acceso Privado</h2>
          <p>Ingresa la contraseña para ver los leads.</p>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Contraseña"
              className={styles.input}
            />
            {error && <p className={styles.errorText}>{error}</p>}
            <button type="submit" className={styles.primaryBtn}>Ingresar</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <h1>Panel de Interesados (Leads)</h1>
          <button onClick={fetchLeads} className={styles.refreshBtn}>
            {loading ? 'Actualizando...' : 'Refrescar datos'}
          </button>
        </div>

        {leads.length === 0 && !loading ? (
          <div className={styles.emptyState}>No hay leads registrados aún.</div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Nombre</th>
                  <th>Contacto</th>
                  <th>Sector</th>
                  <th>Ingresos</th>
                  <th>Problema Principal</th>
                  <th>Urgencia</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => {
                  const dateObj = lead.createdAt?.toDate ? lead.createdAt.toDate() : new Date();
                  const dateStr = dateObj.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute:'2-digit' });
                  
                  return (
                    <tr key={lead.id}>
                      <td className={styles.dateCell}>{dateStr}</td>
                      <td>
                        <strong>{lead.nombre} {lead.apellido}</strong>
                      </td>
                      <td>
                        <a href={`mailto:${lead.correo}`} className={styles.link}>{lead.correo}</a><br/>
                        <a href={`https://wa.me/${lead.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className={styles.linkWhatsApp}>
                          {lead.whatsapp}
                        </a>
                      </td>
                      <td>{lead.sector}</td>
                      <td>{lead.ingresos}</td>
                      <td>{lead.problema}</td>
                      <td>{lead.urgencia}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
