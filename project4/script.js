function openAnimal(event, animal) {
	var i;
	var tabstuff = document.getElementsByClassName("tabstuff");
	for (i = 0; i < tabstuff.length; i++) {
		tabstuff[i].style.display = "none";
	}
	var tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(animal).style.display = "block";
	event.currentTarget.className += " active";
}
