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
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id","groups");
		for (var i = 0, j = clothingCategories.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = clothingCategories[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	function getCheckboxValue(){
		if ($("dryCleanOnly").checked){
			dryCleanValue = $("dryCleanOnly").value;
			
		}else{
			dryCleanValue = "No"
		}
	
	}
	
	function storeData(){
		var id		= Math.floor(Math.random()*100000001);
		// Gather up form field values and store in an object
		// Object properties contain array with the form label and input values.
		getCheckboxValue();
		var item	= {};
			item.groups = ["Groups", $("groups").value];
			item.name = ["Name", $("name").value];
			item.brand = ["Brand", $("brand").value];
			item.color = ["Color", $("color").value];
			item.drycleanonly = ["Dry Clean Only", dryCleanValue];
			item.notes = ["Notes", $("notes").value];
		// Save data to local storage: Use stringify to convert our object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert ("Item Saved");
	}

//Variable defaults
	var clothingCategories = ["--Choose a Category--", "Shoes", "Tops", "Bottoms", "Jewelry", "Handbags"],
		dryCleanValue = "No"
		;
	makeCats();

//set link & submit click events

	//var displayLink = $("displayLink");
	//displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	//clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	console.log(save);
	save.addEventListener("click", storeData);
	


});