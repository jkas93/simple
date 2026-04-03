import styles from './Contact.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const revealRef = useScrollReveal();

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
            <h2 className={styles.formTitle}>
              Agenda tu <strong>asesoría<br/>gratuita</strong> de crecimiento digital
            </h2>
            
            <form className={styles.form}>
              <div className={styles.inputRow}>
                <input type="text" placeholder="Nombre" className={styles.input} />
                <input type="text" placeholder="Apellido" className={styles.input} />
              </div>
              <input type="email" placeholder="Correo electronico" className={styles.input} />
              <input type="tel" placeholder="Whatsapp" className={styles.input} />

              <h3 className={styles.subText}>Sobre su negocio</h3>
              
              <div className={styles.inputGroup}>
                <label>¿A qué se dedica tu negocio?</label>
                <select className={styles.input}>
                   <option>Aquí un desglosable</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>¿Tu negocio ya está generando ingresos?</label>
                <select className={styles.input}>
                   <option>Aquí un desglosable</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>¿Actualmente cómo consigues clientes?</label>
                <input type="text" className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label>¿Cuál es tu principal problema para conseguir clientes?</label>
                <select className={styles.input}>
                   <option>Aquí un desglosable</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>¿Qué tan urgente es para ti conseguir más clientes?</label>
                <input type="text" className={styles.input} />
              </div>

              <p className={styles.disclaimer}>
                Debido a la alta demanda, solo contactamos a negocios<br/>
                que realmente estén interesados en crecer.
                <br/><br/>
                Si calificas, te contactaremos por<br/>
                WhatsApp para agendar tu asesoría.
              </p>

              <button type="button" className={styles.submitBtn}>
                Agendar asesoría gratuita
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
