import { useParams } from 'react-router-dom';
import { ProjetsDataEntreprise } from '../../ProjetsDataEntreprise';
import './PageProjet.css';
import { Document, Page} from "react-pdf/dist/esm/entry.webpack";
import {useState} from "react";
import {ProjetsData} from "../../ProjetsData";

function PageProjetEntrepise() {
    const { id } = useParams();

    const [numPages, setNumPages] = useState(null);
    function  onDocumentSuccess({numPages}){
        setNumPages(numPages)
    }
    return (
        <>
            <Document file={ProjetsDataEntreprise.pdffile} onLoadSuccess={onDocumentSuccess}>
                {
                    Array(numPages).fill().map((_, i)=>(
                        <Page pageNumber={i+1}></Page>
                    ))
                }
            </Document>
            <header style={{ backgroundImage: `url("${ProjetsDataEntreprise[id - 1].img}")` }} className="hero">
                <h1 className="title">{ProjetsDataEntreprise[id - 1].titre}</h1>
            </header>
            <div className="leadIn">
                <div className="wrapper">
                    {ProjetsDataEntreprise[id - 1].tags.map(data => {
                        return (
                            <span className="tag">{data.libelle}</span>
                        );
                    })}
                    <h3 className="tagline">{ProjetsDataEntreprise[id - 1].descriptionCourte}</h3>
                </div>
            </div>
            <div className="wrapper">
                <div className="content">{ProjetsDataEntreprise[id - 1].descriptionLongue}</div>
                {ProjetsDataEntreprise[id - 1].pdfFile.map(data => {
                    return(
                        <>
                            <h1 className="mt-24">{data.name}</h1>
                            <iframe src={data.libelle} width="1300px" height="1000px"/>
                        </>
                    )
                })}
            </div>
            <footer>
                <a href="/epreuveE4" className="button">Voir plus</a>
            </footer>
        </>
    );
}

export default PageProjetEntrepise;