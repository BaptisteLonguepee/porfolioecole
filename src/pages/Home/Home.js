import './Home.css';
import { ProjetsData } from '../../ProjetsData';


function Home() {
    return (
        <>
        <header className="hero">
        <img
          width="1600"
          height="1131"
          className="img"
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=75"
          srcSet="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=75 800w,https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=75 1200w,https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=75 1600w,https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=2400&q=75 2400w"
          sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (max-width: 2400px) 2400px, 1200px" 
          alt='img-accueil'/>
        <div className="gradient"></div>
        <div className="gradient2"></div>
        <div className="overlay">
          <h1 className="title">
            <small className="subtitle">Le site personnel de</small>Baptiste Longuepee
          </h1>
          <div className="roles">
            <span className="role">👩‍💻 Développeur <span className="invert">👩‍💻 Développeur</span></span>
          </div>
          <p className="desc"></p>
        </div>
      </header>
      <main className="wrapper">
          <div className="section">
              <h3 className="sectionTitle">A propos de moi</h3>
              <p className="bio">
                  Je m'appelle Baptiste Longuepee et je suis étudiant en informatique. Mon rêve est de devenir développeur full stack
                  et de travailler sur des projets complexes qui me permettent de mettre en pratique mes compétences en programmation et
                  en résolution de problèmes. J'aime aussi beaucoup les technologies de l'IA et j'espère pouvoir un jour les intégrer dans
                  mes projets de développement. En dehors de mes études, j'aime passer du temps avec ma famille et mes amis, et j'adore pratiquer
                  divers sports et activités de plein air.
              </p>
              <p>
                  <a href="/about">Lire la suite</a>
              </p>
          </div>
        </main>
        </>
    );
}

export default Home;