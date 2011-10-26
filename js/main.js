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
	
	function toggleControls(n){
		switch(n){
			case "on":
				$("contactForm").style.display = "none";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "none";
				$("addNew").style.display = "inline";
				break;
			case "off":
				$("contactForm").style.display = "block";
				$("clear").style.display = "inline";
				$("displayLink").style.display = "inline";
				$("addNew").style.display = "none";
				$("items").style.display = "none";
				break;
			default:
				return false;
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
	
	function getData(){
	//write data from local storage to browser
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement ("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$("items").style.display = "block";
		for (var i=0, len=localStorage.length; i<len;i++){
			var makeLi = document.createElement ("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// convert the string from local storage value back to an object using JSON.parse ()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeli.appendChild(makeSubList);
			for (var n in obj){
				var makeSubli=document.createElement("li");
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}	
		
		}
	}
	
	
	
	
	
	}

//Variable defaults
	var clothingCategories = ["--Choose a Category--", "Shoes", "Tops", "Bottoms", "Jewelry", "Handbags"],
		dryCleanValue = "No"
		;
	makeCats();

//set link & submit click events

	var displayLink = $("displayLink");
	displayLink.addEventListener("click", getData);
	var clearLink = $("clear");
	//clearLink.addEventListener("click", clearLocal);
	var save = $("submit");
	console.log(save);
	save.addEventListener("click", storeData);
	


});