import { useState } from 'react';
import styles from './Contact.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { saveLead } from '../lib/dataLayer';

const Contact = () => {
  const revealRef = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    industry: '',
    revenue: '',
    currentAcquisition: '',
    problem: '',
    urgency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await saveLead(formData);
      setIsSuccess(true);
      setFormData({
        firstName: '', lastName: '', email: '', phone: '',
        industry: '', revenue: '', currentAcquisition: '',
        problem: '', urgency: ''
      });
    } catch (err) {
      console.error("Error al enviar", err);
      alert("Hubo un error al enviar tus datos. Por favor intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactContainer} ref={revealRef}>
      <div className="container">
        <div className={styles.contactFlex}>
          <div className={styles.contactTitleBox} data-reveal="fade-right">
            <h1 className={styles.hugeTitle}>
              Registrate<br/>
              para<br/>
              saber<br/>
              mas
            </h1>
          </div>

          <div className={styles.formCard} data-reveal="fade-left" data-delay="200">
            {isSuccess ? (
              <div className={styles.successMessage}>
                <h2>¡Gracias por tu interés!</h2>
                <p>Hemos recibido tus datos y te contactaremos pronto por WhatsApp para agendar tu asesoría.</p>
                <button type="button" onClick={() => setIsSuccess(false)} className={styles.submitBtn} style={{marginTop: '20px'}}>
                  Enviar otra respuesta
                </button>
              </div>
            ) : (
              <>
                <h2 className={styles.formTitle}>
                  Agenda tu <strong>asesoría<br/>gratuita</strong> de crecimiento digital
                </h2>
                
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputRow}>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Nombre" className={styles.input} />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Apellido" className={styles.input} />
                  </div>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Correo electronico" className={styles.input} />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Whatsapp" className={styles.input} />

                  <h3 className={styles.subText}>Sobre su negocio</h3>
                  
                  <div className={styles.inputGroup}>
                    <label>¿A qué se dedica tu negocio?</label>
                    <select name="industry" value={formData.industry} onChange={handleChange} required className={styles.input}>
                       <option value="" disabled>Selecciona una opción</option>
                       <option value="Salud / Odontología">Salud / Odontología</option>
                       <option value="Servicios Profesionales / Agencia">Servicios Profesionales / Agencia</option>
                       <option value="Tienda online / E-commerce">Tienda online / E-commerce</option>
                       <option value="Restaurante / Cafetería">Restaurante / Cafetería</option>
                       <option value="Inmobiliaria / Bienes Raíces">Inmobiliaria / Bienes Raíces</option>
                       <option value="Educación / Coaching">Educación / Coaching</option>
                       <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>¿Tu negocio ya está generando ingresos?</label>
                    <select name="revenue" value={formData.revenue} onChange={handleChange} required className={styles.input}>
                       <option value="" disabled>Selecciona una opción</option>
                       <option value="Sí, pero quiero escalar">Sí, pero quiero escalar</option>
                       <option value="Sí, ingresos estables">Sí, ingresos estables</option>
                       <option value="Apenas estoy comenzando">Apenas estoy comenzando (0 - poco)</option>
                       <option value="Aún no">Aún no</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>¿Actualmente cómo consigues clientes?</label>
                    <select name="currentAcquisition" value={formData.currentAcquisition} onChange={handleChange} required className={styles.input}>
                       <option value="" disabled>Selecciona una opción</option>
                       <option value="Boca a boca / Recomendaciones">Boca a boca / Recomendaciones</option>
                       <option value="Redes sociales orgánicas (sin pago)">Redes sociales orgánicas (sin pago)</option>
                       <option value="Anuncios de pago (Facebook/Google Ads)">Anuncios de pago (Facebook/Google Ads)</option>
                       <option value="Agentes / Equipo de ventas">Agentes / Equipo de ventas</option>
                       <option value="Volantes / Medios tradicionales">Volantes / Medios tradicionales</option>
                       <option value="Otro">Otro medio</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>¿Cuál es tu principal problema para conseguir clientes?</label>
                    <select name="problem" value={formData.problem} onChange={handleChange} required className={styles.input}>
                       <option value="" disabled>Selecciona una opción</option>
                       <option value="Mis anuncios no son rentables">Hago anuncios pero no son rentables</option>
                       <option value="Mucha interacción, pocas ventas">Tengo likes pero no ventas</option>
                       <option value="Dependo mucho del boca a boca">Dependo casi 100% del boca a boca</option>
                       <option value="No tengo presencia digital">No tengo apenas presencia digital</option>
                       <option value="No sé por dónde empezar">No sé por dónde empezar</option>
                       <option value="No me da el tiempo">Falta de tiempo para atender redes</option>
                       <option value="Otro">Otro problema</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>¿Qué tan urgente es para ti conseguir más clientes?</label>
                    <select name="urgency" value={formData.urgency} onChange={handleChange} required className={styles.input}>
                       <option value="" disabled>Selecciona una opción</option>
                       <option value="Muy urgente (Para este mes)">Muy urgente (Para este mes)</option>
                       <option value="Urgente (En los próximos 3 meses)">Urgente (En los próximos 3 meses)</option>
                       <option value="Moderado (Estoy explorando)">Moderado (Estoy explorando)</option>
                       <option value="Bajo (Solo quiero estar en contacto)">Bajo (Solo quiero estar en contacto)</option>
                    </select>
                  </div>

                  <p className={styles.disclaimer}>
                    Debido a la alta demanda, solo contactamos a negocios<br/>
                    que realmente estén interesados en crecer.
                    <br/><br/>
                    Si calificas, te contactaremos por<br/>
                    WhatsApp para agendar tu asesoría.
                  </p>

                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Agendar asesoría gratuita'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
