import { supabase } from './supabase';
import { calculateScore } from './scoring';

/**
 * Capa de abstracción de datos estrictamente acoplada a Supabase
 * (Metodología P.U.L.S.O. - Optimización de Arquitectura y Seguridad)
 */

export async function saveLead(leadData) {
  const lead = {
    ...leadData,
    status: 'Nuevo',
    score: calculateScore(leadData),
    created_at: new Date().toISOString()
  };

  const { data, error } = await supabase.from('leads').insert([lead]).select().single();
  
  if (error) {
    console.error("Error al guardar en Supabase:", error);
    throw error;
  }
  
  return data;
}

export async function getLeads() {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error("Error al cargar desde Supabase:", error);
    throw error;
  }
  
  return data || [];
}

export async function updateLead(id, updates) {
  const { error } = await supabase
    .from('leads')
    .update(updates)
    .eq('id', id);
    
  if (error) {
    console.error("Error al actualizar en Supabase:", error);
    throw error;
  }
  
  return true;
}

export async function deleteLead(id) {
  const { error } = await supabase
    .from('leads')
    .delete()
    .eq('id', id);
    
  if (error) {
    console.error("Error al eliminar en Supabase:", error);
    throw error;
  }

  return true;
}

