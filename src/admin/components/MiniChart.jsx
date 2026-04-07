import React from 'react';

export default function MiniChart({ leads }) {
  // Gráfico de barras simple simulando últimos 7 días
  // Por simplicidad calculamos frecuencias de los últimos 7 días
  
  const today = new Date();
  const last7Days = Array.from({length: 7}).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return { date: d.toISOString().split('T')[0], count: 0 };
  });

  leads.forEach(l => {
    if(!l.created_at) return;
    const ds = l.created_at.split('T')[0];
    const dayObj = last7Days.find(d => d.date === ds);
    if (dayObj) dayObj.count += 1;
  });

  const maxCount = Math.max(...last7Days.map(d => d.count), 1);

  return (
    <div style={{ background: 'rgba(15,5,25,0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 style={{ fontSize: '14px', color: '#8c8c8c', marginBottom: '20px', fontWeight: '500' }}>Leads últimos 7 días</h3>
      
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '100px', gap: '10px', justifyContent: 'space-between' }}>
        {last7Days.map((day, i) => {
          const heightPct = (day.count / maxCount) * 100;
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', flex: 1 }}>
              <div style={{ 
                width: '100%', 
                height: `${heightPct}%`, 
                background: day.count > 0 ? 'var(--primary)' : 'rgba(255,255,255,0.05)', 
                borderRadius: '4px 4px 0 0',
                transition: 'height 0.5s ease-out',
                minHeight: '2px'
              }}></div>
              <span style={{ fontSize: '10px', color: '#8c8c8c' }}>{day.date.split('-')[2]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
