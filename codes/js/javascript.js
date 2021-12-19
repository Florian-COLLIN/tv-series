/* @author : Florian COLLIN
 *
 * @date : 2021
 *
 * @last-revision : 2021
 */
/*

== Code source ==

=== Affichage de la date en temps réel ===

<pre> */
function affiche_annee() {
	var anneeEnCours = new Date();
	window.document.write(anneeEnCours.getFullYear());
}
/* </pre>

== Affichage de la version actuelle du site ==

<pre> */
function version_ifsd() {
	var version_ifsd = "1.1.2";
	var link = "https://github.com/Florian-COLLIN/tv-series/releases/tag/v"
	window.document.write("(<a href=\"" + link + version_ifsd + "\">v." + version_ifsd + "</a>)");
}
/* </pre>

== Onglets ==

<pre> */
function change_onglet(name) {
	document.getElementById("onglet_" + anc_onglet).className = "onglet_0 onglet";
	document.getElementById("onglet_" + name).className = "onglet_1 onglet";
	document.getElementById("contenu_onglet_" + anc_onglet).style.display = "none";
	document.getElementById("contenu_onglet_" + name).style.display = "block";
	anc_onglet = name;
}
/* </pre>

== RSS ==

<pre> */
function rss() {
	document.write('<article>'
		+'<div class="news-title"><a href="/news/2021/12/disney+-nouveautés-de-janvier-2022.html">Disney+ : nouveautés de Janvier 2022 (Big Sky, Queens...)</a></div><div class="news-desc">Big Sky est de retour sur Disney+ avec sa saison 2, et beaucoup d\'annonces...</div><div class="rss-date">19 décembre 2021</div>'
		+'</article>'
		+'<br><hr><br>'
		+'<article>'
		+'<div class="news-title"><a href="/news/2021/12/sam-nouvelle-saison.html">Sam : nouvelle saison</a></div><div class="news-desc">Après, une longue année d\'attente, la saison 6 de Sam...</div><div class="rss-date">18 décembre 2021</div>'
		+'</article>'
		+'<br><hr><br>'
		+'<article>'
		+'<div class="news-title"><a href="/news/2021/12/changement-de-site-pour-la-ifsd.html">Changement de site pour la IFSD</a></div><div class="news-desc">À partir d\'aujourd\'hui, vingt-deux heures, vous n\'accèderez plus à florian-collin...</div><div class="rss-date">01 décembre 2021</div>'
		+'</article>');
}
/* </pre>

== Échec de Mise à jour ==

<pre> */
function miseajour() {
	alert("Échec de la mise à jour de cette page ! Elle n'est donc pas à jour.");
}
/* </pre>

== Retour en haut ==

<pre> */
document.addEventListener('DOMContentLoaded', function() {
	window.onscroll = function(ev) {
		document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
	};
});

/* </pre>

== Fin du code ==

*/
