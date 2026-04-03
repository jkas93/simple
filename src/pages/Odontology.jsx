import styles from './Odontology.module.css';
import { motion } from 'framer-motion';

const Odontology = () => {
  return (
    <div className={styles.odontologyContainer}>
      {/* HERO */}
      <section className={styles.heroSection}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.heroContent}>
            <p className={styles.subtitle}>simple marketing</p>
            <h1 className={styles.title}>
              Consigue más pacientes<br/>
              para tu clínica dental<br/>
              <span className="text-primary glow-text">todos los meses</span>
            </h1>
            <p className={styles.description}>
              Implementamos un sistema digital que atrae, convierte y agenda pacientes 
              automáticamente para tu clínica, sin depender de recomendaciones.
            </p>
            <div className={styles.ctaGroup}>
              <button className={styles.primaryBtn}>Agendar una asesoría gratuita</button>
              <button className={styles.secondaryBtn}>¿Como funciona?</button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 90 DIAS */}
      <section className={styles.daysSection}>
        <div className="container">
          <div className={styles.daysFlex}>
            <div className={styles.daysText}>
              <h2>Te ayudamos a <strong>conseguir <br/>pacientes</strong></h2>
              <p>fijos todos los meses</p>
              <h1 className={styles.bigText}>en 90 dias</h1>
              <button className={styles.primaryBtn}>Quiero mas pacientes</button>
            </div>
            <div className={styles.chatsContainer}>
              <div className={styles.chatBubbleRight}>Hola, quisiera agendar una cita! 😊</div>
              <div className={styles.chatBubbleLeft}>¡Hola! Claro que sí, será un gusto ayudarte</div>
              <div className={styles.chatBubbleRight}>Hola doc, creo que ya me toca mantenimiento 🤕</div>
              <div className={styles.chatBubbleRight}>Hola, creo que mis dientes ya están<br/>pidiendo ayuda urgente 😅</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOSING MONEY */}
      <section className={styles.problemsSection}>
        <div className="container text-center">
          <h2 className={styles.sectionTitle}>
            Si esto te pasa, estás perdiendo<br/>dinero todos los días
          </h2>
          <div className={styles.problemsList}>
             <div className={styles.problemItem}>
                <h3>Tu agenda tiene<br/>espacios vacios</h3>
                <button className={styles.itemBtn}>Contactanos</button>
             </div>
             <div className={styles.problemItem}>
                <h3>Dependes del<br/>boca a boca</h3>
                <button className={styles.itemBtn}>Contactanos</button>
             </div>
             <div className={styles.problemItem}>
                <h3>Respondes tarde<br/>los mensajes</h3>
                <button className={styles.itemBtn}>Contactanos</button>
             </div>
             <div className={styles.problemItem}>
                <h3>Publicas en redes<br/>pero no generas</h3>
                <button className={styles.itemBtn}>Contactanos</button>
             </div>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className={styles.systemSection}>
        <div className="container text-center">
          <h2 className={styles.sectionTitle}>
            No hacemos marketing...<br/>
            <strong>creamos sistemas de pacientes</strong>
          </h2>
          <p className={styles.systemSubtitle}>En Simple implementamos un sistema completo que:</p>

          <div className={styles.systemSteps}>
             <img src="/assets/images/esfera-morada.svg" alt="Fondo" className={styles.systemBg} />
             <ul className={styles.stepList}>
               <li><span className={styles.stepLg}>1</span> Atrae pacientes<br/>con anuncios</li>
               <li><span className={styles.stepLg}>2</span> Convierte<br/>interesados en citas</li>
               <li><span className={styles.stepLg}>3</span> Automatiza<br/>el seguimiento</li>
               <li><span className={styles.stepLg}>4</span> Llena tu agenda<br/>de forma constante</li>
             </ul>
          </div>
        </div>
      </section>

      {/* CUPOS */}
      <section className={styles.cuposSection}>
        <div className="container">
          <div className={styles.cuposBox}>
             <div className={styles.cuposText}>
               <h2>Cupos<br/>limitados</h2>
               <p>Solo trabajamos con 3 clínicas o<br/>odontólogos por zona para evitar<br/>competencia directa.</p>
               <button className={styles.secondaryBtn}>Quiero la garantia</button>
             </div>
             <img src="/assets/images/muela.svg" alt="Muela" className={styles.muelaImg} />
          </div>
        </div>
      </section>
      
      {/* EXPECTATIONS */}
      <section className={styles.expectationsSection}>
        <div className="container">
           <h2 className={styles.sectionTitleCenter}>Esto es lo que puedes esperar</h2>
           <div className={styles.expectationsGrid}>
              <div className={styles.expectationBox}>
                 <span className={styles.checkIcon}>✓</span>
                 <h4>Más mensajes de<br/>pacientes interesados</h4>
              </div>
              <div className={styles.expectationBox}>
                 <span className={styles.checkIcon}>✓</span>
                 <h4>Más citas<br/>agendadas</h4>
              </div>
              <div className={styles.expectationBox}>
                 <span className={styles.checkIcon}>✓</span>
                 <h4>Menos tiempo perdido<br/>respondiendo</h4>
              </div>
              <div className={styles.expectationBox}>
                 <span className={styles.checkIcon}>✓</span>
                 <h4>Mayor ingreso<br/>mensual</h4>
              </div>
           </div>
        </div>
      </section>

      {/* 4 PASOS AGENDA */}
      <section className={styles.agendaStepsSection}>
        <div className="container text-center">
           <div className={styles.agendaHeader}>
              <h2 className={styles.agendaTitle}>Así llenamos tu agenda en</h2>
              <span className={styles.hugeNumber4}>4</span>
              <h2 className={styles.agendaSubtitle}>pasos</h2>
           </div>
           
           <div className={styles.agendaGrid}>
              <div className={styles.agendaStepItem}>
                 <span className={styles.agendaStepNum}>1</span>
                 <div className={styles.agendaStepTextBox}>
                    Atrae pacientes<br/>con anuncios
                 </div>
              </div>
              <div className={styles.agendaStepItem}>
                 <span className={styles.agendaStepNum}>3</span>
                 <div className={styles.agendaStepTextBox}>
                    Automatiza<br/>el seguimiento
                 </div>
              </div>
              <div className={styles.agendaStepItem}>
                 <span className={styles.agendaStepNum}>2</span>
                 <div className={styles.agendaStepTextBox}>
                    Convierte<br/>interesados en citas
                 </div>
              </div>
              <div className={styles.agendaStepItem}>
                 <span className={styles.agendaStepNum}>4</span>
                 <div className={styles.agendaStepTextBox}>
                    Llena tu agenda<br/>de forma constante
                 </div>
              </div>
           </div>
           
           <button className={styles.primaryBtnFull}>Quiero el sistema</button>
        </div>
      </section>

      {/* REQUISITOS LIST Y CARTAS FINALES */}
      <section className={styles.finalCardsSection}>
        <div className="container">
            <div className={styles.requirementsBox}>
               <h2 className={styles.reqTitle}>Este servicio es para ti si:</h2>
               <ul className={styles.reqList}>
                 <li><span>✓</span> Tienes clínica activa</li>
                 <li><span>✓</span> Eres un odontologo y quieres pacientes</li>
                 <li><span>✓</span> Quieres crecer</li>
                 <li><span>✓</span> Puedes atender más pacientes</li>
               </ul>
            </div>

            <div className={styles.gratisCard}>
               <div className={styles.gratisText}>
                  <h2>trabajo<br/>gratis</h2>
                  <p>Si no generamos interesados en<br/>los primeros 90 días, trabajamos<br/>gratis hasta lograrlo.</p>
                  <button className={styles.darkBtnSm}>Quiero la garantia</button>
               </div>
            </div>

            <div className={styles.bonusCard}>
               <h2>BONUS</h2>
               <ul className={styles.bonusList}>
                 <li>🎁 Guión de ventas por WhatsApp listo para usar</li>
                 <li>🎁 Auditoría completa de su clínica</li>
                 <li>🎁 Optimización de perfil GRATIS</li>
                 <li>🎁 Estrategia personalizada</li>
               </ul>
               <button className={styles.darkBtnSm}>Quiero el bono</button>
            </div>
        </div>
      </section>

      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Odontology;
