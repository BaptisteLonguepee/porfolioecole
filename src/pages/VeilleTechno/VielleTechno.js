import "./VielleTechno.css";

function VielleTechno() {

    return (
        <>
            <div className="wrapper">
                <h1>Qu’est-ce que la veille technologique ?</h1>
                <p>La veille technologique, élément de la veille stratégique, consiste à surveiller les évolutions techniques, les innovations dans un secteur d’activité donnée. La veille technologique comprend notamment la surveillance, la collecte, le partage et la diffusion d’information permettant d’anticiper ou de s’informer sur des changements en matière de recherche, développement, brevet, lancement de nouveaux produits, matériaux, processus, concepts, innovation de fabrication, etc…. Cela a pour but d’évaluer l’impact sur l’environnement et l’organisation.</p>

                <h1>Sujet de la veille technologique.</h1>
                <p>Le sujet de ma veille technologique se portera sur JavaScript</p>

                <h1>Comment sont traiter les informations ?</h1>
                <p>Pour pouvoir traiter les infomations j'ai utiliser une application web</p>
                <div className="flex items-center">
                    <div className="mt-16">
                        <h1 className="text-center">Feedly</h1>
                        <img className="ml-auto mr-auto w-64" src="https://upload.wikimedia.org/wikipedia/commons/5/56/Feedly-logo.png" alt="logo"></img>
                        <p className="text-center">Feedly est un agrégateur de flux RSS et Atom en ligne Freemium. Il est accessible par un navigateur internet, et est également disponible sous forme d’application pour smartphone.
                        J’ai choisi Feedly car c’est un logiciel simple d’utilisation avec plusieurs canaux de suivi malgré la version gratuite.</p>
                    </div>
                    <div className="mt-16">
                        <h1 className="text-center">RSS.APP</h1>
                        <img className="ml-auto mr-auto w-60" src="https://avatars.githubusercontent.com/u/46205708?s=200&v=4" alt="logo"></img>
                        <p className="text-center">RSS.APP est aussi un agrégateur de flux RSS et Atom en ligne Freemium. Il est accessible par un navigateur internet.
                        J’ai choisi RSS.APP car c’est un site web qui est trés simple d’utilisation.</p>
                    </div>
                </div>

                <div className="flex">

                </div>
            </div>
        </>
    );
}
export default VielleTechno;