import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LIBRARY_IMG = 'https://uk.bedtimestories.world/bedtime/images/library.png';
const STORYTELLER_IMG = 'https://uk.bedtimestories.world/bedtime/images/story_teller.jpg';
const STATISTICS_IMG = 'https://uk.bedtimestories.world/bedtime/images/statistics.jpg';
const PLAY_IMG = 'https://uk.bedtimestories.world/bedtime/images/play.png';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="dashboard-page">
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 15px' }}>

          <div className="text-center regular_title">Explora. Imagina. Divíertete.</div>

          {/* Section 1 */}
          <div className="regular_info_part" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0 }}>
            <div style={{ width: '100%', flex: '1 1 300px', padding: '0 15px' }}>
              <p className="main_ebook_basic_text">
                <b>Cuentos para Dormir</b><br /><br />
                Cuentos para Dormir es una plataforma de lectura integral para niños que presenta una amplia variedad de historias populares de diversas culturas del mundo. Abraza la tradición de contar cuentos a la hora de dormir, que fomenta el amor por la literatura y la narrativa en las mentes jóvenes.
                <br /><br />
                Nuestra extensa colección incluye cuentos de hadas e historias cortas que pueden ayudar a ampliar el vocabulario de tu hijo, mejorar sus habilidades, estimular su imaginación y fomentar su creatividad. Con Cuentos para Dormir, ofrecemos lo mejor de todos los mundos: lectura, escucha y experiencias interactivas, para una aventura literaria enriquecedora para tu hijo.
              </p>
            </div>
            <div style={{ width: '100%', flex: '1 1 300px', padding: '0 15px' }}>
              <div className="hero-placeholder">
                <img src={PLAY_IMG} className="play-button-vid" alt="play" />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="regular_info_part" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0 }}>
            <div style={{ width: '100%', flex: '1 1 300px', padding: '0 15px', order: 2 }} className="order-md-1">
              <div className="image_box_ebooks">
                <img src={LIBRARY_IMG} width="100%" alt="library" />
              </div>
            </div>
            <div style={{ width: '100%', flex: '1 1 300px', padding: '0 15px', order: 1 }} className="order-md-2">
              <p className="main_ebook_basic_text">
                <b>Biblioteca de Libros</b><br /><br />
                Descubre una vasta colección de cuentos de hadas e historias cortas en nuestra biblioteca y disfruta de clásicos como El Libro de la Selva, Aladino y la Lámpara Maravillosa, Peter Pan, ¡y muchas otras historias atemporales!
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="regular_info_part" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0 }}>
            <div style={{ width: '100%', flex: '1 1 300px', padding: '0 15px' }}>
              <p className="main_ebook_basic_text">
                <b>Elige a tu Narrador</b><br /><br />
                Embárcate en una emocionante aventura con nuestros hábiles narradores mientras te guían a través de una historia inmersiva. ¡Tienes la libertad de elegir a tu compañero de aventura y emprender un viaje lleno de maravillas, peligros y emoción!
              </p>
            </div>
            <div style={{ width: '100%', flex: '1 1 300px', padding: '0 15px' }}>
              <div className="image_box_ebooks">
                <img src={STORYTELLER_IMG} width="100%" alt="storyteller" />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="regular_info_part" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0 }}>
            <div style={{ width: '100%', flex: '1 1 300px', padding: '0 15px', order: 2 }}>
              <div className="image_box_ebooks">
                <img src={STATISTICS_IMG} width="100%" alt="statistics" />
              </div>
            </div>
            <div style={{ width: '100%', flex: '1 1 300px', padding: '0 15px', order: 1 }}>
              <p className="main_ebook_basic_text">
                <b>Sigue tu Progreso y Desbloquea Logros</b><br /><br />
                Con nuestro Centro de Estadísticas, puedes monitorear el progreso de lectura de tu hijo y el tiempo que dedica a los libros. Además, nuestra exclusiva función de Logros puede ayudar a encender la pasión de tu hijo por la lectura.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
