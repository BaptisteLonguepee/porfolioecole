import { useParams } from 'react-router-dom';
import { ProjetsData } from '../../ProjetsData';
import './PageProjet.css';
import {useState} from "react";


function PageProjet() {
    const { id } = useParams();

    return (
        <>
            <header style={{ backgroundImage: `url("${ProjetsData[id - 1].img}")` }} className="hero">
                <h1 className="title">{ProjetsData[id - 1].titre}</h1>
            </header>
            <div className="leadIn">
                <div className="wrapper">
                    {ProjetsData[id - 1].tags.map(data => {
                        return (
                            <span className="tag">{data.libelle}</span>
                        );
                    })}
                    <h3 className="tagline">{ProjetsData[id - 1].descriptionCourte}</h3>
                </div>
            </div>
            <div className="wrapper">
                <div className="content">{ProjetsData[id - 1].descriptionLongue}</div>
                {ProjetsData[id - 1].pdfFile.map(data => {
                    return(
                        <>
                        <h1 className="mt-24">{data.name}</h1>
                        <iframe src={data.libelle} width="1300px" height="1000px"/>
                        </>
                    )
                })}
            </div>
            <footer>
                <a href="/epreuveE4" className="button">Revenir en arrière</a>
            </footer>
        </>
    );
}

export default PageProjet;