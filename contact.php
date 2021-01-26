<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Séries télévisées en France</title>
		<link rel="stylesheet" href="/tv-series/style.css">
	</head>
	<body>
		<!-- Partie supérieur -->
		<header>
			<h1 class="sites"><a href="/tv-series/">Séries télévisées en France</a></h1>
		</header>
		<!-- Navigation -->
		<nav>
			<ul>
				<li class="deroulant"><a href="/tv-series/series/">Séries tendances</a>
					<ul class="sous">
						<li><a href="/tv-series/series/ici-tout-commence.html"><i>Ici tout commence</i></a></li>
						<li><a href="/tv-series/series/sam.html"><i>Sam</i></a></li>
						<li><a href="/tv-series/series/la-promesse.html"><i>La Promesse</i></a></li>
						<li><a href="/tv/series/series/doc.html"><i>Doc</i></a></li>
					</ul>
				</li>
				<li class="deroulant"><a href="/tv-series/news/">Actualités</a>
					<ul class="sous">
						<li><a href="/news/2021/01/top-series-2020.html">Top des séries françaises 2020</a></li>
						<li><a href="/news/2021/01/ici-tout-commence-deprogramme.html">Ici tout commence déprogrammé</a></li>
					</ul>
				</li>
				<li><a href="/tv-series/contact.html">Contact</a></li>
			</ul>
		</nav>
		<div class="conteneur">
		<br>
		<!-- Contenu -->
		<main>
			<?php
			if(isset($_POST['email']) and isset($_POST['sujet']) and isset($_POST['message']))
				{
					Â  Â  Â  Â  $destinataire = 'florian.collin36@gmail.com';
					Â  Â  Â  Â  $email = htmlentities($_POST['email']);
					Â  Â  Â  Â  if(preg_match('#^(([a-z0-9!\#$%&\\\'*+/=?^_`{|}~-]+\.?)*[a-z0-9!\#$%&\\\'*+/=?^_`{|}~-]+)@(([a-z0-9-_]+\.?)*[a-z0-9-_]+)\.[a-z]{2,}$#i',str_replace('&amp;','&',$email)))
					Â  Â  Â  Â {
						Â  Â  Â  Â  Â  Â  Â  Â  $sujet = 'Contact: '.stripslashes($_POST['sujet']);
						Â  Â  Â  Â  Â  Â  Â  Â  $message = stripslashes($_POST['message']);
						Â  Â  Â  Â  Â  Â  Â  Â  $headers = "From: <".$email.">\n";
						Â  Â  Â  Â  Â  Â  Â  Â  $headers .= "Reply-To: ".$email."\n";
						Â  Â  Â  Â  Â  Â  Â  Â  $headers .= "Content-Type: text/plain; charset=\"iso-8859-1\"";
						Â  Â  Â  Â  Â  Â  Â  Â  if(mail($destinataire,$sujet,$message,$headers))
						Â  Â  Â  Â  Â  Â  Â  Â {
							Â  Â  Â  Â  Â  Â  Â  Â  Â  Â  Â  Â  echo "<strong>Votre message a bien &eacute;t&eacute; envoy&eacute;.</strong>";
						}
						Â  Â  Â  Â  Â  Â  Â  Â  else
						Â  Â  Â  Â  Â  Â  Â  Â  {
							Â  Â  Â  Â  Â  Â  Â  Â  Â  Â  Â  Â  echo "<strong style=\"color:#ff0000;\">Une erreur c'est produite lors de l'envois du message.</strong>";
						Â  Â  Â  Â  Â  Â  Â  Â }
					Â  Â  Â  Â }
					Â  Â  Â  Â else
					Â  Â  Â  Â {
						Â  Â  Â  Â  Â  Â  Â  Â  echo "<strong style=\"color:#ff0000;\">L'email que vous avez entr&eacute; est invalide.</strong>";
					Â  Â  Â  Â }
				}
				else {
			?>
			<form action="" method="post">
				Â  Â  Â  Â  <fieldset>
					Â  Â  Â  Â  <legend>Formulaire de contact</legend>
					Â  Â  Â  Â  <label for="email" style="display:inline-block;width:100px;"><strong>Votre Email:</strong></label> <input type="text" name="email" id="email" /><br />
					Â  Â  Â  Â  <label for="sujet" style="display:inline-block;width:100px;"><strong>Sujet:</strong></label> <input type="text" name="sujet" id="sujet" /><br />
					Â  Â  Â  Â  <label for="message"><strong>Message:</strong></label><br />
					Â  Â  Â  Â  <textarea cols="70" rows="4" name="message" id="message"></textarea><br />
					Â  Â  Â  Â  <input type="submit" value="Envoyer" />
				Â  Â  </fieldset>
			</form>
			<?php 
				}
			?>
		</main>
		<br>
		<!-- Bas -->
		<footer>
		</footer>
		</div>
	</body>
</html>