import jalon1 from '../src/PDF/SIRAC/SIRAC-Jalon1.pdf';
import jalon2 from '../src/PDF/SIRAC/SIRAC-Jalon2.pdf';

import marieTeamJalon1 from '../src/PDF/MarieTeam/marieteamjalon1_merged.pdf';

export const ProjetsData = [
    {
        id : 1,
        titre : "Projet SIRAC",
        client : "",
        img : "http://baptistelonguepee.fr/images/sirac.png",
        descriptionCourte : "Site de réservation en ligne pour un restaurant",
        descriptionLongue : "En cours de première année, nous avons dû réaliser un projet de groupe, le but de celui-ci était de créer un site de restaurant, avec une connexion, gestion des repas avec une page d’administration, envoie d’e-mail pour la confirmation du rendez-vous",
        tags : [
            {libelle : "Laravel"},
            {libelle : "Dev"},
            {libelle : "PHP"}

        ],
        pdfFile : [
            {name: "Jalon 1",libelle : jalon1},
            {name: "Jalon 2",libelle : jalon2}
        ],
    },
    {
        id : 2,
        titre : "Projet MarieTeam",
        client : "",
        img : "http://baptistelonguepee.fr/images/img.png",
        descriptionCourte : "Site de réservation en ligne pour une compagnie maritime",
        descriptionLongue : "En cours de deuxième année, nous avons dû réaliser un projet de groupe, le but de celui-ci était de créer un site de réservation de traversées, avec une connexion, envoie d’e-mail pour la confirmation du rendez-vous",
        tags : [
            {libelle : "Laravel"},
            {libelle : "Dev"},
            {libelle : "PHP"}

        ],
        pdfFile : [
            {name: "Les différents jalons",libelle : marieTeamJalon1},
        ],
    },
];

