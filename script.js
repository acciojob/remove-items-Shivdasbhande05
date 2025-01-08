//your JS code here. If required.
let color = document.querySelector("#colorSelect");
let removeButton = document.querySelector("#removeButton");

removeButton.addEventListener("click", (e) => {
	let selectedColor = color.selectedIndex;

	color.remove(selectedColor);
});