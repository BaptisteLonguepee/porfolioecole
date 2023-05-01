import './epreuvee4.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {PopUpData} from "../../PopUpData";
import Popup from "../../components/Popup";
function epreuveE4() {
    const popupData = PopUpData.find((data) => data.id === 1);
    return (
        <>
            <div className="section" id="E4">
                <p className="text-4xl text-center mb-4 text-blue-600">Tableau de synthèse des réalisations professionnelles (E4)</p>
                <table className="table table-striped table-hover table-bordered text-center border-primary">
                    <thead>
                    <tr className="table-info">
                        <th scope="col" className="text-center">
                            <FontAwesomeIcon icon={['fas', 'book']}/><br/>Compétences
                        </th>
                        <th scope="col" className="text-center">
                            <FontAwesomeIcon icon={['fas', 'clock']}/><br/>Date
                        </th>
                        <th scope="col" className="text-center">
                            <Popup
                                   titre={PopUpData[0].titre}
                                   descriptionItems={PopUpData[0].descriptionLongue}
                                   icon={PopUpData[0].icon}></Popup>
                            <br/>Patrimoine
                        </th>
                        <th scope="col" className="text-center">
                            <Popup
                                titre={PopUpData[1].titre}
                                descriptionItems={PopUpData[1].descriptionLongue}
                                icon={PopUpData[1].icon}></Popup>
                            <br/>Incidents / Demandes
                        </th>
                        <th scope="col" className="text-center">
                            <Popup
                                titre={PopUpData[2].titre}
                                descriptionItems={PopUpData[2].descriptionLongue}
                                icon={PopUpData[2].icon}></Popup>
                            <br/>Présence
                        </th>
                        <th scope="col" className="text-center">
                            <Popup
                                titre={PopUpData[3].titre}
                                descriptionItems={PopUpData[3].descriptionLongue}
                                icon={PopUpData[3].icon}></Popup>
                            <br/>Projet
                        </th>
                        <th scope="col" className="text-center">
                            <Popup
                                titre={PopUpData[4].titre}
                                descriptionItems={PopUpData[4].descriptionLongue}
                                icon={PopUpData[4].icon}></Popup>
                            <br/>Service
                        </th>
                        <th scope="col" className="text-center">
                            <Popup
                                titre={PopUpData[5].titre}
                                descriptionItems={PopUpData[5].descriptionLongue}
                                icon={PopUpData[5].icon}></Popup>
                            <br/>Développement
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="text-center">
                        <th scope="row" className="text-center">Compétences mise en oeuvre et réalisations professionnelles</th>
                        <td></td>
                        <td>Gérer le patrimoine informatique</td>
                        <td>Répondre aux incidents et aux demandes d’assistance et d’évolution</td>
                        <td>Développer la présence en ligne de l’organisation</td>
                        <td>Travailler en mode projet</td>
                        <td>Mettre à disposition des utilisateurs un service informatique</td>
                        <td>Organiser son développement professionnel</td>
                    </tr>
                    <tr>
                        <th scope="row" colSpan="8" className="table-success text-center">Réalisation en cours de formation</th>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">Projet SIRAC - Réalisation d'un site de restauration avec un framwork PHP (Laravel)</th>
                        <td>De janvier à juin 2022</td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="project/1">
                                <FontAwesomeIcon icon={['fas', 'university']}/>
                            </a>
                        </td>
                        <td></td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="project/1">
                                <FontAwesomeIcon icon={['fas', 'sitemap']}/>
                            </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="project/1">
                                <FontAwesomeIcon icon={['fas', 'briefcase']}/>
                            </a>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>


                    <tr>
                        <th scope="row" className="text-center">Mise en place d'une veille informationnelle sur le framework Laravel</th>
                        <td>11/1/2022</td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="/veilletechno">
                                <FontAwesomeIcon icon={['fas', 'university']}/>
                            </a>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th scope="row" className="text-center">Projet MarieTeam (E5) - Mise en place d'un site web de
                            reservation et de gestion des transports, d'une application client lourd de création de
                            brochures
                        </th>
                        <td>de septembre 2022 à mai 2023</td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="project/2">
                                <FontAwesomeIcon icon={['fas', 'university']}/>
                            </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="project/2">
                                <FontAwesomeIcon icon={['fas', 'bug']}/>
                        </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="project/2">
                                <FontAwesomeIcon icon={['fas', 'sitemap']}/>
                            </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="project/2">
                                <FontAwesomeIcon icon={['fas', 'briefcase']}/>
                            </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="project/2">
                                <FontAwesomeIcon icon={['fas', 'user-plus']}/>
                            </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="project/2">
                                <FontAwesomeIcon icon={['fas', 'rocket']}/>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row" colSpan="8" className="table-success text-center">
                            Réalisations en milieu professionnel en cours de première année<br/>
                            <a className="text-black nav-link smooth-scroll" target="_new" href="portfolio.html#Stages">SOLUTIONSPDV</a>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">Support Informatique <br/>(intervention site web)</th>
                        <td>Du 9/5/2022 au 24/6/2022</td>
                        <td></td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="projectEntreprise/1">
                                <FontAwesomeIcon icon={['fas', 'bug']}/>
                            </a>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <th scope="row" className="text-center">Réalisation de site web pour des clients</th>
                        <td>Du 9/5/2022 au 24/6/2022</td>
                        <td></td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="projectEntreprise/1">
                                <FontAwesomeIcon icon={['fas', 'bug']}/>
                            </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="projectEntreprise/1">
                                <FontAwesomeIcon icon={['fas', 'sitemap']}/>
                            </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="projectEntreprise/1">
                                <FontAwesomeIcon icon={['fas', 'briefcase']}/>
                            </a>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row" colSpan="8" className="table-success text-center">
                            Réalisations en milieu professionnel en cours de seconde année<br/>
                            <a className="text-black nav-link smooth-scroll" target="_new" href="portfolio.html#Stages">SOLUTIONSPDV</a>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center">Support Informatique <br/>(intervention site web)</th>
                        <td>Du 9/5/2022 au 24/6/2022</td>
                        <td></td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="projectEntreprise/2">
                                <FontAwesomeIcon icon={['fas', 'bug']}/>
                            </a>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr>
                        <th scope="row" className="text-center">Réalisation de site web pour des clients</th>
                        <td>Du 9/5/2022 au 24/6/2022</td>
                        <td></td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="projectEntreprise/2">
                                <FontAwesomeIcon icon={['fas', 'bug']}/>
                            </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="projectEntreprise/2">
                                <FontAwesomeIcon icon={['fas', 'sitemap']}/>
                            </a>
                        </td>
                        <td className="text-center">
                            <a className="btn btn-primary btn-icon btn-round btn-sm" href="projectEntreprise/2">
                                <FontAwesomeIcon icon={['fas', 'briefcase']}/>
                            </a>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default epreuveE4;