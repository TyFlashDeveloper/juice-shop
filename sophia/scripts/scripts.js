/*
	Fonction appelé au chargement de la page 4 - Les prix
	deux méthodes sont éxécutés, à savoir 
		-	resetForm, qui permet de réinitialiser les valeurs des inputs
		-	doPrompt, qui permet d'afficher automatiquemet l'info bulle, comme demandé dans les consignes
	L'ensemble de ces méthodes sont utiles pour la page 4 - Les prix
	NB : C'est la seule et unique page qui charge ce fichier scripts.js
*/
function loadPage(){
	resetForm()
	doPrompt()
}

/*
	Fonction resetForm
	document.getElementById permettant, gràce au Javascript, de cibler un élément via son id 
	Indique à l'élément formulaire de reset l'ensemble des valeurs (Certains navigateurs gardent en mémoire les valeurs entrées)
*/
function resetForm(){
	document.getElementById("formulaire").reset()
}

/*
	Fonction doPrompt
	document.getElementById permettant, gràce au Javascript, de cibler un élément via son id 
	Permet d'afficher l'info bulle
	Cette méthode a été légèrement amélioré afin de remplir, automatiqument, le champs nom utilisateur gràce à l'input inséré dans l'info bulle
*/
function doPrompt(){
	var inputNomUtilisateur = document.getElementById('nom_utilisateur')
	var nomUtilisateur = prompt("Veuillez indiquez votre nom s'il vous plait")
	inputNomUtilisateur.value = nomUtilisateur;
}

/*
	Fonction requiredTooltip
	Affiche un méssage d'alerte précisant que le champs est obligatoire. 
	Cette méthode est appelé sur le onClick du champs email. 
	C'est un requis des consignes
*/
function requiredTooltip() {
	alert('Veuillez compléter ce champs')
}