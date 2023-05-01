import './BtsSio.css';

function BtsSio() {
    return (
        <>
            <div className="wrapper">
                <h1>QU'EST CE QUE LE BTS SIO ?</h1>
                <p>Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations, s'adresse à ceux qui souhaitent se former en deux ans aux métiers d'administrateur réseau ou de développeur. Pour par la suite intégrer directement le marché du travail ou continuer des études, dans le domaine de l'informatique.</p>
                <p></p>
                <div className='lesoptions'>
                    <div className='option'>
                        <h1>L'option SLAM</h1>
                        <p className="text-center">Le signe SLAM signifie «Solutions Logicielles et Applications Métier». Voici quelques indications sur cette seconde option du BTS SIO, ainsi des précisions sur cette formation et ses débouchés.
                            L’option SLAM est destinée aux étudiants qui s’orientent vers les métiers liés à la conception et la maintenance de programmes applicatifs. Grâce à des cours spécifiques, les diplômés seront capables de gérer un parc informatique ou d’administrer un réseau au sein d’une entreprise.
                            Ils pourront également gérer l’intégration, la sécurisation et la configuration des serveurs, mais aussi des postes clients et des équipements d’interconnexion.<br/>
                            Voici les débouchés avec un BTS SIO SLAM:<br />
                        </p>
                        <p className="text-left">
                            - Développeur d'applications informatiques<br />
                            - Développeur informatique<br />
                            - Analyste d'applications ou d'études<br />
                            - Analyste programmeur<br />
                            - Chargé d'études informatiques<br />
                            - Informaticien d'études<br />
                            - Programmeur analyste<br />
                            - Programmeur d'applications<br />
                            - Responsable des services applicatifs<br />
                            - Technicien d'études informatiques
                        </p>
                    </div>
                    <div className='option'>
                        <h1>L'option SISR</h1>
                        <p>L’acronyme SISR signifie « Solutions d’infrastructure, systèmes et réseaux ». Voici des précisions sur cette formation et ses débouchés.
                            L’option SISR est destinée aux étudiants qui s’orientent vers les métiers liés à la conception et la maintenance d’infrastructures réseaux. Assurer la sécurité, la maintenance et l’installation des réseaux et des équipements informatiques font partie des principales missions des futurs administrateurs, techniciens ou pilotes d’exploitation.
                            Des cours plus généraux viendront compléter la formation et apporter des compétences plus généralistes, permettant ainsi aux diplômés d’être opérationnels dans n’importe quelle entreprise.<br/>
                            Voici les débouchés avec un BTS SIO SISR:<br />
                        </p>
                        <p className="text-left">
                            - Technicien de production<br />
                            - Technicien d’infrastructure<br />
                            - Technicien réseau et télécoms<br />
                            - Technicien systèmes et réseaux<br />
                            - Administrateur systèmes et réseaux<br />
                            - Support systèmes et réseaux<br />
                            - Pilote d’exploitation<br />
                            - Informaticien support et déploiement
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BtsSio;