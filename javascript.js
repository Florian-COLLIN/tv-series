/* @author : Florian COLLIN
 * 
 * @date : 2021
 * 
 * @next-revision : 2021
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

== Onglets ==

<pre> */
function change_onglet(name) {
	document.getElementById('onglet_'+anc_onglet).className = 'onglet_0 onglet';
	document.getElementById('onglet_'+name).className = 'onglet_1 onglet';
	document.getElementById('contenu_onglet_'+anc_onglet).style.display = 'none';
	document.getElementById('contenu_onglet_'+name).style.display = 'block';
	anc_onglet = name;
}
/* </pre>

== Fin du code ==

*/