import { Link } from 'react-router-dom';
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
                <Link to="/contacto" className={styles.primaryBtnSm}>Agendar una asesoría gratuita</Link>
                <button className={styles.secondaryBtnSm}>Quiero saber mas</button>
              </div>
            </div>
            <img src="/assets/images/muela.svg" alt="Odontología" className={styles.cardImg} />
          </div>

          <a href="https://wa.me/51936118428?text=Hola,%20vengo%20de%20tu%20web%20y%20quiero%20conseguir%20mas%20clientes%20para%20mi%20negocio,%20me%20puedes%20ayudar" target="_blank" rel="noopener noreferrer" className={styles.card} data-reveal="fade-up" data-delay="100">
            <h2>Quiero<br/>mas<br/>clientes</h2>
          </a>

          <a href="https://wa.me/51936118428?text=Hola,%20vengo%20de%20tu%20web%20y%20necesito%20contenido%20para%20mis%20redes%20que%20realmente%20genere%20ventas,%20quiero%20mas%20info" target="_blank" rel="noopener noreferrer" className={styles.card} data-reveal="fade-up" data-delay="200">
            <h2>Necesito<br/>contenido<br/>para redes</h2>
            <p>(Reels o post con estrategia)</p>
          </a>

          <a href="https://wa.me/51936118428?text=Hola,%20vengo%20de%20tu%20web%20y%20quiero%20crear%20una%20pagina%20web%20o%20tienda%20virtual%20que%20venda,%20me%20puedes%20asesorar" target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.cardWide}`} data-reveal="fade-up" data-delay="100">
             <h2>Necesito una<br/>oficina virtual</h2>
             <p>(Pagina web o tienda virtual)</p>
          </a>

          <a href="https://wa.me/51936118428?text=Hola,%20vengo%20de%20tu%20web%20y%20necesito%20una%20estrategia%20de%20ventas%20porque%20no%20estoy%20vendiendo%20lo%20que%20quisiera" target="_blank" rel="noopener noreferrer" className={styles.card} data-reveal="fade-up" data-delay="200">
             <h2>Quiero una<br/>estrategia<br/>de ventas</h2>
          </a>

          <a href="https://wa.me/51936118428?text=Hola,%20vengo%20de%20tu%20web%20y%20quiero%20mejorar%20la%20imagen%20y%20branding%20de%20mi%20marca%20para%20que%20se%20vea%20mas%20profesional" target="_blank" rel="noopener noreferrer" className={styles.card} data-reveal="fade-up" data-delay="300">
             <h2>Quiero que mi<br/>marca tenga<br/>identidad</h2>
             <p>(Branding)</p>
          </a>
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
              <a href="https://wa.me/51936118428?text=Hola,%20vengo%20de%20tu%20web%20y%20me%20interesa%20el%20Plan%20Inicial%20de%20S/600%20para%20empezar%20a%20generar%20contenido%20y%20conseguir%20mis%20primeros%20clientes,%20me%20puedes%20dar%20mas%20detalles" target="_blank" rel="noopener noreferrer" className={styles.choosePlanBtn}>Elegir plan</a>
            </div>

            {/* Plan Standar (Highlight) */}
            <div className={styles.pricingCard} data-reveal="fade-up" data-delay="150">
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
              <a href="https://wa.me/51936118428?text=Hola,%20vengo%20de%20tu%20web%20y%20quiero%20el%20Plan%20Standard%20de%20S/1180%20para%20mejorar%20mi%20alcance%20y%20ventas%20con%20contenido%20estrategico,%20quiero%20saber%20como%20empezamos" target="_blank" rel="noopener noreferrer" className={styles.choosePlanBtn}>Elegir plan</a>
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
              <a href="https://wa.me/51936118428?text=Hola,%20vengo%20de%20tu%20web%20y%20me%20interesa%20el%20Plan%20Pro%20Ventas%20para%20escalar%20mis%20ventas%20con%20publicidad%20y%20optimizacion,%20quiero%20informacion%20completa" target="_blank" rel="noopener noreferrer" className={styles.choosePlanBtn}>Elegir plan</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
