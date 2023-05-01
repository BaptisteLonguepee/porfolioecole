import bouangerie from "./PDF/boulangerie/BoulangerieMathieu.pdf";
import tech from "./PDF/Tech/tech.pdf";

export const ProjetsDataEntreprise = [
    {
        id : 1,
        titre : "Site Boulangerie",
        client : "",
        img : "http://baptistelonguepee.fr/images/imgBoulangerie.png",
        descriptionCourte : "Site de réservation en ligne pour une boulangerie",
        descriptionLongue : "",
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
        descriptionCourte : "Site de réservation en ligne pour un paysagiste",
        descriptionLongue : "",
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
