export function calculateScore(lead) {
  let score = 0;

  // 1. Ingresos
  if (lead.revenue === 'Sí, pero quiero escalar') score += 25;
  else if (lead.revenue === 'Sí, ingresos estables') score += 20;
  else if (lead.revenue === 'Apenas estoy comenzando') score += 10;
  else score += 0;

  // 2. Industria / Nicho (los que pueden tener mayor LTV)
  if (lead.industry === 'Salud / Odontología') score += 20;
  else if (lead.industry === 'Servicios Profesionales / Agencia') score += 15;
  else if (lead.industry === 'Tienda online / E-commerce') score += 15;
  else if (lead.industry === 'Educación / Coaching') score += 10;
  else score += 5; // Otros

  // 3. Problema
  if (lead.problem === 'Mis anuncios no son rentables') score += 20;
  else if (lead.problem === 'No sé por dónde empezar') score += 10;
  else if (lead.problem === 'Dependo mucho del boca a boca') score += 15;
  else score += 5;

  // 4. Urgencia
  if (lead.urgency === 'Muy urgente (Para este mes)') score += 30;
  else if (lead.urgency === 'Urgente (En los próximos 3 meses)') score += 15;
  else if (lead.urgency === 'Moderado (Estoy explorando)') score += 5;
  else score += 0;

  // 5. Adquisición actual
  if (lead.currentAcquisition === 'Anuncios de pago (Facebook/Google Ads)') score += 15;
  else if (lead.currentAcquisition === 'Agentes / Equipo de ventas') score += 10;
  else if (lead.currentAcquisition === 'Redes sociales orgánicas (sin pago)') score += 5;
  else score += 0;

  // Cap top at 100
  return Math.min(score, 100);
}
