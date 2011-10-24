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
	
	function storeData(){
		var id		= math.floor(math.random()*100000001);
		// Gather up form field values and store in an object
		// Object properties contain array with the form label and input values.
		var item	= {};
			item.group = ["Group", $("group").value];
			item.name = ["Name", $("name").value];
			item.brand = ["Brand", $("brand").value];
			item.color = ["Color", $("color"),value];
			item.drycleanonly = ["Dry Clean Only", $("dry clean only".value];
			item.notes = ["Notes", $("notes"..value];
	
	
	
	}

//Variable defaults
	var clothingCategories = [--"Choose a Category"--, "Shoes", "Tops", "Bottoms", "Jewelry", "Handbags"];
	makeCats();

//set link & submit click events

	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	save.addEventListener("click", storeData);
	



	};