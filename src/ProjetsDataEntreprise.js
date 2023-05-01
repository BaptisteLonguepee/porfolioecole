import bouangerie from "./PDF/boulangerie/BoulangerieMathieu.pdf";
import tech from "./PDF/Tech/tech.pdf";

export const ProjetsDataEntreprise = [
    {
        id : 1,
        titre : "Site Boulangerie",
        client : "",
        img : "http://baptistelonguepee.fr/images/imgBoulangerie.png",
        descriptionCourte : "Site de resvation en ligne pour une boulangerie",
        descriptionLongue : "En cour de première année, nous avons dû réaliser un projet de groupe, le but de celui-ci était de créer un site de restaurant, avec une connexion, gestion des repas avec une page d’administration, envoie d’e-mail pour la confirmation du rendez-vous",
        tags : [
            {libelle : "Prestashop"},
            {libelle : "Dev"},
            {libelle : "PHP"}
        ],
        pdfFile : [
            {name: "Présentation",libelle : bouangerie},
        ],
    },
    {
        id : 2,
        titre : "Projet Paysagiste",
        client : "",
        img : "http://baptistelonguepee.fr/images/imgTechMotoCulture.png",
        descriptionCourte : "Site de resvation en ligne pour un paysagiste",
        descriptionLongue : "En cour de première année, nous avons dû réaliser un projet de groupe, le but de celui-ci était de créer un site de restaurant, avec une connexion, gestion des repas avec une page d’administration, envoie d’e-mail pour la confirmation du rendez-vous",
        tags : [
            {libelle : "Prestashop"},
            {libelle : "Dev"},
            {libelle : "PHP"}
        ],
        pdfFile : [
            {name: "Présentation",libelle : tech},
        ]
    },
];
