export function exportToCsv(leads) {
  if (!leads || !leads.length) return;

  const headers = ['ID', 'Fecha', 'Nombre', 'Apellido', 'Email', 'Teléfono', 'Industria', 'Ingresos', 'Adquisición', 'Problema', 'Urgencia', 'Score', 'Estado'];
  
  const csvRows = [
    headers.join(','),
    ...leads.map(lead => [
      `"${lead.id}"`,
      `"${new Date(lead.created_at).toLocaleDateString()}"`,
      `"${lead.firstName}"`,
      `"${lead.lastName}"`,
      `"${lead.email}"`,
      `"${lead.phone}"`,
      `"${lead.industry}"`,
      `"${lead.revenue}"`,
      `"${lead.currentAcquisition}"`,
      `"${lead.problem}"`,
      `"${lead.urgency}"`,
      `"${lead.score || 0}"`,
      `"${lead.status}"`
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvRows], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `leads_export_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
