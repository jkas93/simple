import React from 'react';

export default function DonutChart({ data, title }) {
  // data expect format: [{ label: 'Salud', value: 10, color: '#ff0000' }]
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  if (total === 0) {
    return <div style={{ color: '#8c8c8c', textAlign: 'center', padding: '20px' }}>Sin datos aún</div>;
  }

  let currentAngle = 0;
  const segments = data.map(item => {
    const percentage = item.value / total;
    const angle = percentage * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    return { ...item, percentage, startAngle, angle };
  });

  return (
    <div style={{ background: 'rgba(15,5,25,0.8)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 style={{ fontSize: '14px', color: '#8c8c8c', marginBottom: '20px', fontWeight: '500' }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <div style={{ position: 'relative', width: '120px', height: '120px', borderRadius: '50%', background: `conic-gradient(${segments.map(s => `${s.color} ${s.startAngle}deg ${s.startAngle + s.angle}deg`).join(', ')})` }}>
          <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', bottom: '20px', background: '#030006', borderRadius: '50%' }}></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {segments.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: s.color }}></div>
              <span style={{ color: '#fff' }}>{s.label}</span>
              <span style={{ color: '#8c8c8c' }}>({Math.round(s.percentage * 100)}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
