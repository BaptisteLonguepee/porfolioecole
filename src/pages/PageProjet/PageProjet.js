import { useParams } from 'react-router-dom';
import { ProjetsData } from '../../ProjetsData';
import './PageProjet.css';

function PageProjet() {
    const { id } = useParams();
    return (
        <>
            <header style={{ backgroundImage: `url("${ProjetsData[id - 1].img}")` }} className="hero">
                <h1 className="title">{ProjetsData[id - 1].titre}</h1>
            </header>
            <div class="leadIn">
                <div class="wrapper">
                    {ProjetsData[id - 1].tags.map(data => {
                        return (
                            <span class="tag">{data.libelle}</span>
                        );
                    })}
                    <h3 class="tagline">{ProjetsData[id - 1].descriptionCourte}</h3>
                </div>
            </div>
            <div class="wrapper">
                <div class="content">{ProjetsData[id - 1].descriptionLongue}</div>
            </div>
            <footer>
                <a href="/projects" class="button">Voir plus</a>
            </footer>
        </>
    );
}

export default PageProjet;