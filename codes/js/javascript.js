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
	document.getElementById("onglet_" + anc_onglet).className = "onglet_0 onglet";
	document.getElementById("onglet_" + name).className = "onglet_1 onglet";
	document.getElementById("contenu_onglet_" + anc_onglet).style.display = "none";
	document.getElementById("contenu_onglet_" + name).style.display = "block";
	anc_onglet = name;
}
/* </pre>

== RSS ==

<pre> */
function RSS() {
	var fichier="https://florian-collin.github.io/tv-series/codes/news.rss";
	var limite="1";
	var limite1="10";
	var aspect="1";
	var minute="1";
	var sujet="1";
	var te="Times New Roman, serif";
	var fil_textsize="11";
	var title_textcolor="2978D5";
	var tlien="none";
	var text_textcolor="000000";
	var frame_color="817E81";
	var content="1";
	var extract="";
	var cache="15";
	document.write('<s'+'cript language="JavaScript" type="text/javascript" src="http://www.actifpub.com/rss.php?fichier_AP_='+fichier+'&limite_AP_='+limite+'&limite1_AP_='+limite1+'&aspect_AP_='+aspect+'&minute_AP_='+minute+'&sujet_AP_='+sujet+'&te_AP_='+te+'&fil_textsize_AP_='+fil_textsize+'&title_textcolor_AP_='+title_textcolor+'&text_textcolor_AP_='+text_textcolor+'&frame_color_AP_='+frame_color+'&content_AP_='+content+'&cache_AP_='+cache+'&extract_AP_='+extract+'&tlien_AP_='+tlien+'&java=1&member_AP_='+member+'"></sc'+'ript>'); 
}
/* </pre>

== Échec de Mise à jour ==

<pre> */
function miseajour() {
	alert("Échec de la mise à jour de cette page ! Elle n'est donc pas à jour.");
}
/* </pre>

== Fin du code ==

*/