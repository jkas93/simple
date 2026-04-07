import { useState, useEffect } from 'react';
import { getLeads } from '../../lib/dataLayer';
import DonutChart from '../components/DonutChart';
import MiniChart from '../components/MiniChart';

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    converted: 0,
    avgScore: 0
  });

  const [leadsData, setLeadsData] = useState([]);
  const [industryData, setIndustryData] = useState([]);

  useEffect(() => {
    async function loadStats() {
      const leads = await getLeads();
      setLeadsData(leads);
      
      const total = leads.length;
      const newLeads = leads.filter(l => l.status === 'Nuevo').length;
      const converted = leads.filter(l => l.status === 'Convertido').length;
      const avgScore = total > 0 ? Math.round(leads.reduce((acc, l) => acc + (l.score || 0), 0) / total) : 0;
      
      setStats({ total, new: newLeads, converted, avgScore });
      
      // Calculate industry distribution
      const indCount = {};
      leads.forEach(l => {
        if(l.industry) {
          indCount[l.industry] = (indCount[l.industry] || 0) + 1;
        }
      });
      // Pick dynamic colors for top industries
      const colors = ['#c900ff', '#3b82f6', '#22c55e', '#eab308', '#f97316', '#6b7280'];
      const indArr = Object.keys(indCount).map((key, i) => ({
        label: key,
        value: indCount[key],
        color: colors[i % colors.length]
      })).sort((a,b) => b.value - a.value);
      
      setIndustryData(indArr);
    }
    loadStats();
  }, []);

  return (
    <div>
      <h1 style={{marginBottom: '30px'}}>Dashboard General</h1>
      
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'
      }}>
        <StatCard title="Total Leads" value={stats.total} color="var(--primary)" />
        <StatCard title="Nuevos" value={stats.new} color="#3b82f6" />
        <StatCard title="Convertidos" value={stats.converted} color="#22c55e" />
        <StatCard title="Score Promedio" value={stats.avgScore} color="#f97316" suffix="/100" />
      </div>

      <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <MiniChart leads={leadsData} />
        
        {industryData.length > 0 ? (
          <DonutChart title="Distribución por Industria" data={industryData} />
        ) : (
          <div style={{ background: 'rgba(15,5,25,0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ fontSize: '14px', color: '#8c8c8c', marginBottom: '20px', fontWeight: '500' }}>Distribución por Industria</h3>
            <p style={{color: '#8c8c8c', fontSize: '12px'}}>No hay datos suficientes</p>
          </div>
        )}
      </div>

    </div>
  );
}

function StatCard({ title, value, color, suffix = '' }) {
  return (
    <div style={{
      background: 'rgba(15,5,25,0.8)', padding: '24px', borderRadius: '12px', 
      border: '1px solid rgba(255,255,255,0.1)', borderTop: `4px solid ${color}`
    }}>
      <h3 style={{fontSize: '14px', color: '#8c8c8c', fontWeight: '500', marginBottom: '10px'}}>{title}</h3>
      <div style={{fontSize: '32px', fontWeight: '800', color: '#fff'}}>
        {value} <span style={{fontSize: '16px', color: '#8c8c8c'}}>{suffix}</span>
      </div>
    </div>
  );
}
