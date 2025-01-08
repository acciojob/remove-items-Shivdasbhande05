//your JS code here. If required.
var selectEelement = document.getElementById("colorSelect");
var removeButton = document.getElementById("removeButton");

// we will add event listner on remove button
removeButton.addEventListner("click", function() {
	var selectedColor = selectEelement.selectedColor; // it will select color

	// now we remove selected color;
	selectEelement.remove(selectedColor);

});