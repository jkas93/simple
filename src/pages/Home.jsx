import styles from './Home.module.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.subtitle}>simple marketing</p>
          <h1 className={styles.title}>
            Soluciones digitales de <br/>para <span className="text-primary glow-text">hacer crecer tu</span> <br/>negocio
          </h1>
          <p className={styles.description}>
            Creamos sistemas digitales que funcionan 24/7 para atraer clientes, y ayudarte a vender más sin complicaciones.
          </p>
          
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>Agendar una asesoría gratuita</button>
            <button className={styles.secondaryBtn}>¿Como funciona?</button>
          </div>
        </motion.div>
      </section>

      {/* PROBLEMAS SECTION */}
      <section className={styles.problemsContainer}>
        <div className="container text-center">
          <p className={styles.sectionSubtitle}>¿tú negocio no vende?</p>
          <h2 className={styles.sectionTitle}>Muchos negocios tienen <br/>este problema:</h2>
          
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <h3>No llegan <br/>clientes</h3>
              <img src="/assets/images/persona.svg" alt="No llegan clientes" />
              <button className={styles.cardTag}>Tengo este problema</button>
            </div>
            
            <div className={`${styles.card} ${styles.cardActive}`}>
              <h3>Redes <br/>sociales <br/>que no <br/>venden</h3>
              <img src="/assets/images/manos.svg" alt="Redes sociales que no venden" />
              <button className={styles.btnActive}>Quiero saber mas</button>
            </div>
            
            <div className={styles.card}>
              <h3>Anuncios <br/>que no <br/>funcionan</h3>
              <img src="/assets/images/lapop-1.svg" alt="Anuncios que no funcionan" />
              <button className={styles.cardTag}>Tengo este problema</button>
            </div>
            
            <div className={styles.card}>
              <h3>No tienen <br/>página web</h3>
              <img src="/assets/images/laptop-2.svg" alt="No tienen web" />
              <button className={styles.cardTag}>Tengo este problema</button>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className={styles.solutionContainer}>
        <div className={`container ${styles.solutionContent}`}>
          <p className={styles.sectionSubtitle}>La solucion!</p>
          <h2 className={styles.sectionTitle}>
            Creamos sistemas <br/><span className="text-primary glow-text">digitales</span> para atraer <br/>clientes a tu negocio.
          </h2>
          <p className={styles.solutionText}>
            Nuestro enfoque no se trata solo de hacer páginas web o publicar en redes sociales.
            Creamos sistemas digitales completos que trabajan para tu negocio las 24 horas.
          </p>

          <div className={styles.systemList}>
            <h3 className={styles.systemListTitle}>Nuestro sistema incluye:</h3>
            <ul className={styles.systemItems}>
              <li>
                <span className={styles.itemNumber}>01</span>
                <span className={styles.itemIcon}>💻</span>
                <span className={styles.itemText}>Consigue 50 clientes al mes con anuncios</span>
                <button className={styles.itemBtn}>Ir</button>
              </li>
              <li>
                <span className={styles.itemNumber}>02</span>
                <span className={styles.itemIcon}>📈</span>
                <span className={styles.itemText}>Estrategias digitales para atraer y convertir</span>
                <button className={styles.itemBtn}>Ir</button>
              </li>
              <li>
                <span className={styles.itemNumber}>03</span>
                <span className={styles.itemIcon}>🤖</span>
                <span className={styles.itemText}>Automatización de mensajes y atención 24 horas</span>
                <button className={styles.itemBtn}>Ir</button>
              </li>
              <li>
                <span className={styles.itemNumber}>04</span>
                <span className={styles.itemIcon}>📊</span>
                <span className={styles.itemText}>Optimización para convertir visitantes en clientes</span>
                <button className={styles.itemBtn}>Ir</button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className={styles.featuredServices}>
        <div className="container text-center">
          <p className={styles.sectionSubtitle}>Ofrecemos soluciones digitales<br/>diseñadas para ayudarte a crecer.</p>
          <h2 className={styles.sectionTitle}>
            Servicios que impulsan el <br/>crecimiento de tu negocio.
          </h2>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCardLg}>
              <div className={styles.serviceText}>
                <h3>Todos los <br/>servicios</h3>
                <p>Creamos, automatizamos y diseñamos estrategias digitales para que tu negocio atraiga clientes de forma constante, sin depender solo de redes sociales.</p>
                <button className={styles.cardBtn}>Ver servicios</button>
              </div>
              <img src="/assets/images/esfera-morada.svg" alt="Todos los servicios" className={styles.serviceImg} />
            </div>

            <div className={styles.serviceCardLg}>
              <div className={styles.serviceText}>
                <h3>Especialistas <br/>en marketing <br/>odontológico</h3>
                <p>Ayudamos a consultorios y odontólogos a atraer más pacientes con estrategias, web profesionales y sistemas de atención automatizada que convierten consultas en citas.</p>
                <div className={styles.cardActionGroup}>
                  <button className={styles.primaryBtnSm}>Agendar una asesoría gratuita</button>
                  <button className={styles.cardBtn}>Quiero saber mas</button>
                </div>
              </div>
              <img src="/assets/images/muela.svg" alt="Odontología" className={styles.serviceImgMuela} />
            </div>

            <div className={styles.serviceCardSm}>
              <div className={styles.serviceText}>
                <h3>Hosting web <br/>+ dominio</h3>
                <p>Nos encargamos de todo lo técnico para que tu página esté siempre online.</p>
              </div>
              <div className={styles.cardActionGroupCol}>
                <button className={styles.primaryBtnSm}>Contactanos</button>
                <button className={styles.cardBtn}>Ver proyectos</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className={styles.testimonialsSection}>
        <div className="container text-center">
          <p className={styles.sectionSubtitle}>TESTIMONIOS</p>
          <h2 className={styles.sectionTitle}>CASOS REALES</h2>
          
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <h4>Christopher<br/>Mendoza</h4>
              <p className={styles.cardBrand}>Relativobar.</p>
              <p className={styles.cardDesc}>Creamos sistemas digitales que funcionan 24/7 para atraer clientes, y ayudarte a vender más sin complicaciones.</p>
            </div>
            
            <div className={`${styles.testimonialCard} ${styles.testimonialCardActive}`}>
              <h4>Christopher<br/>Mendoza</h4>
              <p className={styles.cardBrandActive}>Relativobar.</p>
              <p className={styles.cardDesc}>Creamos sistemas digitales que funcionan 24/7 para atraer clientes, y ayudarte a vender más sin complicaciones.</p>
            </div>
            
            <div className={styles.testimonialCard}>
              <h4>Christopher<br/>Mendoza</h4>
              <p className={styles.cardBrand}>Relativobar.</p>
              <p className={styles.cardDesc}>Creamos sistemas digitales que funcionan 24/7 para atraer clientes, y ayudarte a vender más sin complicaciones.</p>
            </div>
            
            <div className={styles.testimonialCard}>
              <h4>Christopher<br/>Mendoza</h4>
              <p className={styles.cardBrand}>Relativobar.</p>
              <p className={styles.cardDesc}>Creamos sistemas digitales que funcionan 24/7 para atraer clientes, y ayudarte a vender más sin complicaciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className={styles.logosSection}>
        <div className="container text-center">
          <p className={styles.sectionSubtitle}>TESTIMONIOS</p>
          <h2 className={styles.sectionTitle}>
            Negocios que ya están creciendo<br/>con estrategias digitales.
          </h2>
          <div className={styles.logosGrid}>
            {/* Using text blocks as placeholders for the greyscale logos */}
            <div className={styles.logoItem}><strong>VALOTES</strong></div>
            <div className={styles.logoItem}><strong>PLAZA CHICKEN</strong></div>
            <div className={styles.logoItem}><i>Relativo</i></div>
            <div className={styles.logoItem}>REYNA</div>
            <div className={styles.logoItem}>ROYAL CLUB</div>
          </div>
        </div>
      </section>

      {/* PROCESO SECTION RING */}
      <section className={styles.processSection}>
        <div className="container text-center">
          <p className={styles.sectionSubtitle}>Bienvenido</p>
          <h2 className={styles.sectionTitle}>Así trabajamos contigo.</h2>

          <div className={styles.ringWrapper}>
             <div className={styles.glowRing}>
                <div className={styles.refreshIcon}>↻</div>
             </div>
             
             <div className={`${styles.stepBox} ${styles.stepBox1}`}>
               <span className={styles.stepNum}>1</span>
               <div className={styles.stepContentBox}>
                 <h4>Analizamos<br/>tu negocio</h4>
                 <p>Entendemos tu mercado, tus<br/>clientes y tus objetivos.</p>
               </div>
             </div>
             
             <div className={`${styles.stepBox} ${styles.stepBox2}`}>
               <span className={styles.stepNum}>2</span>
               <div className={styles.stepContentBox}>
                 <h4>Diseñamos tu<br/>estrategia digital</h4>
                 <p>Creamos una solución adaptada<br/>a tu negocio.</p>
               </div>
             </div>
             
             <div className={`${styles.stepBox} ${styles.stepBox3}`}>
               <span className={styles.stepNum}>3</span>
               <div className={styles.stepContentBox}>
                 <h4>Implementamos<br/>el sistema</h4>
                 <p>Desarrollamos tu página web y<br/>herramientas digitales.</p>
               </div>
             </div>
             
             <div className={`${styles.stepBox} ${styles.stepBox4}`}>
               <span className={styles.stepNum}>4</span>
               <div className={styles.stepContentBox}>
                 <h4>Implementamos<br/>el sistema</h4>
                 <p>Desarrollamos tu página web y<br/>herramientas digitales.</p>
               </div>
             </div>
          </div>
          
          <button className={styles.primaryBtn} style={{ marginTop: '80px' }}>Quiero una asesoría gratuita</button>
        </div>
      </section>
      
      {/* TEXT SPLIT SECTION */}
      <section className={styles.splitSection}>
        <div className="container">
           <div className={styles.splitFlex}>
              <div className={styles.splitLeft}>
                 <h2>
                   Si tu negocio<br/>
                   quiere <span className="text-primary">atraer<br/>más clientes,</span><br/>
                   el primer paso<br/>
                   es tener una<br/>estrategia
                 </h2>
              </div>
              <div className={styles.splitRight}>
                 <p className={styles.splitIntro}>
                    Por eso ofrecemos una <strong>asesoría<br/>inicial gratuita</strong>, donde analizamos tu<br/>situación y te mostramos cómo<br/>mejorar tu presencia online.
                 </p>
                 <ul className={styles.bulletList}>
                    <li><span className={styles.bulletDot}></span> Cómo mejorar tu presencia digital</li>
                    <li><span className={styles.bulletDot}></span> Qué herramientas puede usar tu<br/>negocio</li>
                    <li><span className={styles.bulletDot}></span> Qué estrategia puede ayudarte a<br/>conseguir más clientest</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* CALL TO ACTION BOTTOM */}
      <section className={styles.ctaBottomSection}>
        <div className="container text-center">
           <p className={styles.sectionSubtitle}>El siguiente paso</p>
           <h2 className={styles.sectionTitle}>¿Listo para llevar tu<br/>negocio al siguiente nivel?</h2>
           <p className={styles.ctaSubtitleText}>Agenda una asesoría gratuita y descubre cómo podemos<br/>ayudarte a atraer más clientes con estrategias digitales.</p>
           
           <button className={styles.primaryBtn} style={{ margin: '40px 0 80px' }}>Agendar una asesoría gratuita</button>
           
           <div className={styles.discountCard}>
              <div className={styles.discountText}>
                 <h2>
                   Conviertete en<br/>
                   nuestro aliado y gana<br/>
                   hasta un <strong>50% de<br/>
                   descuento</strong><br/>
                   en tus servicios
                 </h2>
                 <button className={styles.primaryBtnSm} style={{ marginTop: '30px' }}>Contactanos</button>
              </div>
              <img src="/assets/images/manos.svg" alt="Manos" className={styles.discountImg} />
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.footerFlex}>
               <div className={styles.footerBrand}>
                  <img src="/assets/images/logo-simple.svg" alt="Simple Marketing" className={styles.footerLogo} />
                  <p>INICIO<br/>SERVICIOS</p>
               </div>
               <button className={styles.primaryBtnSm}>Contactarnos</button>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default Home;
