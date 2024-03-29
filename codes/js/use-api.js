/*
 * @date = 2021
 *
 * @author = Florian COLLIN
 */

var infosElt = document.getElementById("infos");

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function (e) {
    e.preventDefault();
    var nomProfil = formElt.elements.profil.value;
    ajaxGet("https://ifsd.netlify.app/codes/api/series/" + nomProfil + ".json", function (reponse) {
        // Transformation de la réponse en un objet JSON
        var profil = JSON.parse(reponse);
        // Création des informations sur le profil
        var nomElt = document.createElement("div");
        nom.textContent = profil.titre;
        var saisonsElt = document.createElement("div");
        saisons.textContent = profil.saisons;
        var episodesElt = document.createElement("div");
        episodes.textContent = profil.episodes;
        // Affichage des informations
        infosElt.innerHTML = ""; // Suppression des infos précédentes
        infosElt.appendChild(nomElt);
        infosElt.appendChild(saisonsElt);
        infosElt.appendChild(episodesElt);
    });
});
