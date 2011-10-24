// Janelle Salisbury
//VF 1108
//Project 3

window.addEventListener("DOMContentLoaded", function(){

//get element by id function
	function $(x){
	   var theElement = document.getElementById(x);
	   return theElement;
	}
	
// create select field and populate with options
	function makeCats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = ("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id","groups");
		for (var i = 0, j = contactGroups.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	
	
	}

//Variable defaults
	var clothingCategories = [--"Choose a Category"--, "Shoes", "Tops", "Bottoms", "Jewelry", "Handbags"];
	

//set link & submit click events

	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);
	



	};