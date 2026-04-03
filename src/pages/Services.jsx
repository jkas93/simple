import styles from './Services.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Services = () => {
  const revealRef = useScrollReveal();

  return (
    <div className={styles.servicesContainer} ref={revealRef}>
      <section className={styles.headerSection}>
        <div className="container text-center hero-enter">
          <p className={styles.subtitle}>TENEMOS LA SOLUCION</p>
          <h1 className={styles.title}>¿Que solucion debemos de darte?</h1>
        </div>
      </section>

      <section className="container">
        <div className={styles.solutionsGrid}>
          {/* Card Principal */}
          <div className={`${styles.card} ${styles.cardLg}`} data-reveal="fade-up">
            <div className={styles.cardContent}>
              <h2>Soy odontólogo <br/>y quiero mas <br/>clientes</h2>
              <div className={styles.btnGroup}>
                <button className={styles.primaryBtnSm}>Agendar una asesoría gratuita</button>
                <button className={styles.secondaryBtnSm}>Quiero saber mas</button>
              </div>
            </div>
            <img src="/assets/images/muela.svg" alt="Odontología" className={styles.cardImg} />
          </div>

          <div className={styles.card} data-reveal="fade-up" data-delay="100">
            <h2>Quiero<br/>mas<br/>clientes</h2>
          </div>

          <div className={styles.card} data-reveal="fade-up" data-delay="200">
            <h2>Necesito<br/>contenido<br/>para redes</h2>
            <p>(Reels o post con etrategia)</p>
          </div>

          <div className={`${styles.card} ${styles.cardWide}`} data-reveal="fade-up" data-delay="100">
             <h2>Necesito una<br/>oficina virtual</h2>
             <p>(Pagina web o tienda virutal)</p>
          </div>

          <div className={styles.card} data-reveal="fade-up" data-delay="200">
             <h2>Quiero una<br/>estrategia<br/>de ventas</h2>
          </div>

          <div className={styles.card} data-reveal="fade-up" data-delay="300">
             <h2>Quiero que mi<br/>marca tenga<br/>identidad</h2>
             <p>(Branding)</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingGrid}>
            {/* Plan Inicial */}
            <div className={styles.pricingCard} data-reveal="fade-up" data-delay="0">
              <p className={styles.planTarget}>tus primeras ventas</p>
              <h3 className={styles.planName}>Plan inicial</h3>
              <div className={styles.price}>
                <span className={styles.currency}>S/</span>
                <span className={styles.amount}>600</span>
                <span className={styles.cents}>.00</span>
              </div>
              <ul className={styles.featuresList}>
                <li><span className={styles.dot}>•</span> 6 contenidos estratégicos para atraer clientes (feed)</li>
                <li><span className={styles.dot}>•</span> Textos publicitarios (copywriting)</li>
                <li><span className={styles.dot}>•</span> Calendario de contenido mensual</li>
                <li><span className={styles.dot}>•</span> Ideas de contenido</li>
                <li><span className={styles.dot}>•</span> Asesoría mensual (30 min)</li>
              </ul>
              <div className={styles.resultBox}>
                <img src="/assets/images/estadistica.svg" alt="Icono" className={styles.resultIcon} />
                <p>Resultado:<br/>visibilidad + base de marca</p>
              </div>
              <button className={styles.choosePlanBtn}>Elegir plan</button>
            </div>

            {/* Plan Standar (Highlight) */}
            <div className={`${styles.pricingCard} ${styles.pricingCardActive}`} data-reveal="fade-up" data-delay="150">
              <p className={styles.planTarget}>Ventas y alcance</p>
              <h3 className={styles.planName}>Standar</h3>
              <div className={styles.price}>
                <span className={styles.currency}>S/</span>
                <span className={styles.amount}>1180</span>
                <span className={styles.cents}>.00</span>
              </div>
              <div className={styles.featuresTitle}>Incluye:</div>
              <ul className={styles.featuresList}>
                <li><span className={styles.dot}>•</span> Plan inicial +</li>
                <li><span className={styles.dot}>•</span> 4 reels mensuales<br/>(edición incluida)</li>
              </ul>
              <div className={styles.resultBox}>
                <img src="/assets/images/estadistica.svg" alt="Icono" className={styles.resultIcon} />
                <p>Resultado:<br/>visibilidad + base de marca</p>
              </div>
              <button className={styles.choosePlanBtnActive}>Elegir plan</button>
            </div>

            {/* Plan Pro */}
            <div className={styles.pricingCard} data-reveal="fade-up" data-delay="300">
               <p className={styles.planTarget}>Ventas seguras</p>
              <h3 className={styles.planName}>Pro ventas</h3>
              <div className={styles.price}>
                <span className={styles.currency}>S/</span>
                <span className={styles.amount}>1180</span>
                <span className={styles.cents}>.00</span>
              </div>
              <div className={styles.featuresTitle}>Incluye:</div>
              <ul className={styles.featuresList}>
                <li><span className={styles.dot}>•</span> Plan standar +</li>
                <li><span className={styles.dot}>•</span> Gestión de pauta publicitaria<br/>(optimización)</li>
                <li><span className={styles.dot}>•</span> Reporte quincenal (dashboard de métricas)</li>
              </ul>
              <div className={styles.resultBox}>
                <img src="/assets/images/estadistica.svg" alt="Icono" className={styles.resultIcon} />
                <p>Resultado: ventas + crecimiento sostenido</p>
              </div>
              <button className={styles.choosePlanBtn}>Elegir plan</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
