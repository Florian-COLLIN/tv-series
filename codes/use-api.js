/*
Exercice : profil GitHub
*/

var infosElt = document.getElementById("infos");

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function (e) {
    e.preventDefault();
    var nomProfil = formElt.elements.profil.value;
    ajaxGet("https://florian-collin.github.io/codes/api/" + nomProfil + ".json", function (reponse) {
        // Transformation de la réponse en un objet JSON
        var profil = JSON.parse(reponse);
        // Création des informations sur le profil
        var nom = document.createElement("div");
        nom.textContent = profil.titre;
        var saisons = document.createElement("div");
        saisons.textContent = profil.saisons;
        var episodes = document.createElement("div");
        episodes.textContent = profil.episodes;
        // Affichage des informations
        infosElt.innerHTML = ""; // Suppression des infos précédentes
        infosElt.appendChild(nom);
        infosElt.appendChild(saisons);
        infosElt.appendChild(episodes);
    });
});