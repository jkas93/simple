import styles from './Packages.module.css';
import { motion } from 'framer-motion';

const Packages = () => {
  return (
    <div className={styles.packagesContainer}>
      <section className={styles.headerSection}>
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Nuestros<br/>
            paquetes<br/>
            de servicios
          </h1>
        </motion.div>
      </section>

      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingGrid}>
            
            {/* Plan Inicial */}
            <div className={styles.pricingCard}>
              <p className={styles.planTarget}>tus primeras ventas</p>
              <h3 className={styles.planName}>Plan inicial</h3>
              <div className={styles.price}>
                <span className={styles.currency}>€</span>
                <span className={styles.amount}>100</span>
              </div>
              <ul className={styles.featuresList}>
                <li><span className={styles.dot}>•</span> 4 contenidos estratégicos para atraer clientes (feed)</li>
                <li><span className={styles.dot}>•</span> Textos publicitarios (copywriting)</li>
                <li><span className={styles.dot}>•</span> Asesoría mensual (30 min)</li>
              </ul>
              <div className={styles.resultBox}>
                <img src="/assets/images/estadistica.svg" alt="Icono" className={styles.resultIcon} />
                <p>Resultado:<br/>visibilidad + base de marca</p>
              </div>
              <button className={styles.choosePlanBtn}>Elegir plan</button>
            </div>

            {/* Plan Standar (Destacado) */}
            <div className={`${styles.pricingCard} ${styles.pricingCardActive}`}>
              <p className={styles.planTarget}>Ventas y alcance</p>
              <h3 className={styles.planName}>Standar</h3>
              <div className={styles.price}>
                <span className={styles.currency}>€</span>
                <span className={styles.amount}>120</span>
                <span className={styles.cents}>.00</span>
              </div>
              <ul className={styles.featuresList}>
                <li><span className={styles.dot}>•</span> 8 contenidos estratégicos para atraer clientes (feed)</li>
                <li><span className={styles.dot}>•</span> Textos publicitarios (copywriting)</li>
                <li><span className={styles.dot}>•</span> Asesoría mensual (30 min)</li>
                <li><span className={styles.dot}>•</span> Ideas para contenido</li>
                <li><span className={styles.dot}>•</span> apoyo en pauta publicitaria</li>
              </ul>
              <div className={styles.resultBox}>
                <img src="/assets/images/estadistica.svg" alt="Icono" className={styles.resultIcon} />
                <p>Resultado:<br/>Visibilidad + Ventas</p>
              </div>
              <button className={styles.choosePlanBtnActive}>Elegir plan</button>
            </div>

            {/* Plan Pro */}
            <div className={styles.pricingCard}>
               <p className={styles.planTarget}>Ventas seguras</p>
              <h3 className={styles.planName}>Pro ventas</h3>
              <div className={styles.price}>
                <span className={styles.currency}>€</span>
                <span className={styles.amount}>170</span>
                <span className={styles.cents}>.00</span>
              </div>
              <div className={styles.featuresTitle}>Incluye:</div>
              <ul className={styles.featuresList}>
                <li><span className={styles.dot}>•</span> Plan standar +</li>
                <li><span className={styles.dot}>•</span> Gestión de pauta publicitaria<br/>(optimización)</li>
                <li><span className={styles.dot}>•</span> Reporte quincenal (dashboard de<br/>métricas)</li>
              </ul>
              <div className={styles.resultBox}>
                <img src="/assets/images/estadistica.svg" alt="Icono" className={styles.resultIcon} />
                <p>Resultado: ventas + crecimiento<br/>sostenido</p>
              </div>
              <button className={styles.choosePlanBtn}>Elegir plan</button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Packages;
