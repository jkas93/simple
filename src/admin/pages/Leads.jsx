import { useState, useEffect } from 'react';
import { getLeads, updateLead, deleteLead } from '../../lib/dataLayer';
import { exportToCsv } from '../lib/exportCsv';
import styles from './Leads.module.css';

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    setLoading(true);
    const data = await getLeads();
    setLeads(data);
    setLoading(false);
  };

  const handleStatusChange = async (id, newStatus) => {
    await updateLead(id, { status: newStatus });
    loadLeads();
  };

  const handleDelete = async (id) => {
    if (confirm('¿Seguro que deseas eliminar este lead?')) {
      await deleteLead(id);
      loadLeads();
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Nuevo': return '#3b82f6';
      case 'Contactado': return '#eab308';
      case 'En seguimiento': return '#f97316';
      case 'Convertido': return '#22c55e';
      case 'Descartado': return '#6b7280';
      default: return '#8c8c8c';
    }
  };

  const filteredLeads = leads.filter(l => {
    const matchStatus = filter === 'Todos' || l.status === filter;
    const searchString = `${l.firstName} ${l.lastName} ${l.email} ${l.phone} ${l.industry} ${l.problem}`.toLowerCase();
    const matchSearch = searchString.includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div>
      <div className={styles.header}>
        <h1>Gestión de Leads</h1>
        <div className={styles.filters} style={{ display: 'flex', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Buscar leads..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.select}
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className={styles.select}>
            <option value="Todos">Todos</option>
            <option value="Nuevo">Nuevos</option>
            <option value="Contactado">Contactados</option>
            <option value="En seguimiento">En seguimiento</option>
            <option value="Convertido">Convertidos</option>
            <option value="Descartado">Descartados</option>
          </select>
          <button 
            onClick={() => exportToCsv(filteredLeads)}
            className={styles.select} 
            style={{background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', outline: 'none'}}>
            📄 Exportar CSV
          </button>
        </div>
      </div>

      {loading ? (
        <p>Cargando leads...</p>
      ) : filteredLeads.length === 0 ? (
        <div className={styles.empty}>No hay leads en esta categoría.</div>
      ) : (
        <div className={styles.tableCard}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Score</th>
                <th>Nombre</th>
                <th>Contacto</th>
                <th>Industria</th>
                <th>Problema</th>
                <th>Urgencia</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map(lead => (
                <tr key={lead.id}>
                  <td>
                    <div className={styles.scoreBadge} style={{
                      background: lead.score > 70 ? 'rgba(34, 197, 94, 0.2)' : lead.score > 40 ? 'rgba(234, 179, 8, 0.2)' : 'rgba(107, 114, 128, 0.2)',
                      color: lead.score > 70 ? '#4ade80' : lead.score > 40 ? '#facc15' : '#9ca3af'
                    }}>
                      {lead.score || 0}
                    </div>
                  </td>
                  <td>
                    <div style={{fontWeight: 'bold'}}>{lead.firstName} {lead.lastName}</div>
                    <div style={{fontSize: '12px', color: '#8c8c8c'}}>{new Date(lead.created_at).toLocaleDateString()}</div>
                  </td>
                  <td>
                    <div>{lead.phone}</div>
                    <div style={{fontSize: '12px', color: '#8c8c8c'}}>{lead.email}</div>
                  </td>
                  <td>{lead.industry}</td>
                  <td style={{maxWidth: '150px'}} title={lead.problem}>{lead.problem}</td>
                  <td>{lead.urgency}</td>
                  <td>
                    <select 
                      value={lead.status || 'Nuevo'} 
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className={styles.statusSelect}
                      style={{ color: getStatusColor(lead.status || 'Nuevo'), borderColor: getStatusColor(lead.status || 'Nuevo') }}
                    >
                      <option value="Nuevo">Nuevo</option>
                      <option value="Contactado">Contactado</option>
                      <option value="En seguimiento">En seguimiento</option>
                      <option value="Convertido">Convertido</option>
                      <option value="Descartado">Descartado</option>
                    </select>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <a href={`https://wa.me/${lead.phone}?text=Hola ${lead.firstName}, soy de Simple Marketing. Vi que tu negocio necesita ayuda. ¿Cuándo podemos agendar tu asesoría?`} 
                         target="_blank" rel="noopener noreferrer" 
                         className={styles.waBtn}>
                         WA
                      </a>
                      <button onClick={() => handleDelete(lead.id)} className={styles.deleteBtn}>X</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
