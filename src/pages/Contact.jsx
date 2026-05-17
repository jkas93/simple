import { useState } from 'react';
import styles from './Contact.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { saveLead } from '../config/firebase';

const Contact = () => {
  const revealRef = useScrollReveal();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    whatsapp: '',
    sector: '',
    ingresos: '',
    captacion: '',
    problema: '',
    urgencia: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validacion básica
    if (!formData.nombre || !formData.correo || !formData.whatsapp || !formData.sector) {
      setStatus('error');
      setErrorMessage('Por favor completa los campos obligatorios.');
      return;
    }

    setStatus('loading');
    
    const result = await saveLead(formData);
    
    if (result.success) {
      setStatus('success');
      setFormData({
        nombre: '', apellido: '', correo: '', whatsapp: '',
        sector: '', ingresos: '', captacion: '', problema: '', urgencia: ''
      });
    } else {
      setStatus('error');
      setErrorMessage('Hubo un error al enviar tu solicitud. Intenta de nuevo.');
    }
  };

  return (
    <div className={styles.contactContainer} ref={revealRef}>
      <div className="container">
        <div className={styles.contactFlex}>
          <div className={styles.contactTitleBox} data-reveal="fade-right">
            <h1 className={styles.hugeTitle}>
              Regístrate<br/>
              para<br/>
              saber<br/>
              más
            </h1>
          </div>

          <div className={styles.formCard} data-reveal="fade-left" data-delay="200">
            <h2 className={styles.formTitle}>
              Agenda tu <strong>asesoría<br/>gratuita</strong> de crecimiento digital
            </h2>
            
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <h3>¡Solicitud enviada con éxito!</h3>
                <p>Hemos recibido tus datos. Nuestro equipo evaluará tu negocio y nos contactaremos por WhatsApp muy pronto.</p>
                <button type="button" onClick={() => setStatus('idle')} className={styles.submitBtn} style={{marginTop: '20px', width: '100%'}}>
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputRow}>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" className={styles.input} required />
                  <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" className={styles.input} required />
                </div>
                <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo electrónico" className={styles.input} required />
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp" className={styles.input} required />

                <h3 className={styles.subText}>Sobre su negocio</h3>
                
                <div className={styles.inputGroup}>
                  <label>¿A qué se dedica tu negocio?</label>
                  <select name="sector" value={formData.sector} onChange={handleChange} className={styles.input} required>
                    <option value="" disabled>Selecciona una opción...</option>
                    <option value="odontologia">Odontología / Clínica Dental</option>
                    <option value="salud">Salud y Bienestar (Medicina, Psicología, etc.)</option>
                    <option value="servicios">Servicios Profesionales (Abogados, Contadores, etc.)</option>
                    <option value="ecommerce">Comercio Electrónico / Tienda Online</option>
                    <option value="inmobiliaria">Inmobiliaria / Construcción</option>
                    <option value="restaurante">Restaurante / Alimentos</option>
                    <option value="educacion">Educación / Cursos</option>
                    <option value="otro">Otro sector</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label>¿Tu negocio ya está generando ingresos?</label>
                  <select name="ingresos" value={formData.ingresos} onChange={handleChange} className={styles.input} required>
                    <option value="" disabled>Selecciona una opción...</option>
                    <option value="no_empezando">Aún no, estoy por empezar / Recién abrí</option>
                    <option value="si_pocos">Sí, pero muy pocos (quiero más clientes)</option>
                    <option value="si_estables">Sí, tengo ingresos estables pero quiero escalar</option>
                    <option value="si_altos">Sí, nos va muy bien y buscamos automatizar/crecer más</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label>¿Actualmente cómo consigues clientes?</label>
                  <input type="text" name="captacion" value={formData.captacion} onChange={handleChange} className={styles.input} required />
                </div>

                <div className={styles.inputGroup}>
                  <label>¿Cuál es tu principal problema para conseguir clientes?</label>
                  <select name="problema" value={formData.problema} onChange={handleChange} className={styles.input} required>
                    <option value="" disabled>Selecciona una opción...</option>
                    <option value="sin_estrategia">No tengo una estrategia clara</option>
                    <option value="publicidad_sin_retorno">Invierto en publicidad pero no tengo resultados</option>
                    <option value="mala_conversion">La gente pregunta pero no compra</option>
                    <option value="sin_presencia">No tengo presencia digital profesional (sin web)</option>
                    <option value="boca_a_boca">Dependo demasiado del "boca a boca" o referidos</option>
                    <option value="otro">Otro problema</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label>¿Qué tan urgente es para ti conseguir más clientes?</label>
                  <input type="text" name="urgencia" value={formData.urgencia} onChange={handleChange} className={styles.input} required />
                </div>

                <p className={styles.disclaimer}>
                  Debido a la alta demanda, solo contactamos a negocios<br/>
                  que realmente estén interesados en crecer.
                  <br/><br/>
                  Si calificas, te contactaremos por<br/>
                  WhatsApp para agendar tu asesoría.
                </p>

                {status === 'error' && <p className={styles.errorText}>{errorMessage}</p>}

                <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                  {status === 'loading' ? 'Enviando...' : 'Agendar asesoría gratuita'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
