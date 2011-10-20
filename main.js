// Janelle Salisbury
//VF 1108
//Project 3


// delete all this down to end of validateForm
function validateForm(){
    var getName = document.forms[0]["firstName"].value;
    if  (getName == ""){
        document.getElementById("firstName").style.border = "1 px red";
        var encourage = prompt ("first name, please", "");
        if (encourage != null && encourage != ""){
             document.forms[0]["firstName"].value = encourage;
            return false;
        }else{
            document.getElementById("firstName").style.border = "1 px solid #ccc";
        }
    }
    var getPurchaseDate = document.forms[1]["purchaseDate"].value;
    if (getPurchaseDate == ""){
        document.getElementById("purchaseDate").style.border = "1 px red";
    }
    var encourage = prompt ("first name, please" , "");
    if (encourage != null && encourage!= ""){
         document.forms[1]["purchaseDate"].value = encourage;
        return false;
    }else{ 
        document.getElementById("purchaseDate").style.border = "1 px solid #ccc";
    }
} // delete down to here -- dont delete storeItems //
function storeItems(id){
    var name      = document.getElementById("name").value;
    var date      = document.getElementById("date").value;
    var quantity  = document.getElementById("quantity").value;
    var purchased = document.getElementById("purchased").value;
    var notes     = document.getElementById("notes").value;
    
    // here is where you should validate your fields.. like this.. //
    // don't use the document.form[0] bullshit... just do it like the
    // one i'm doing here... all can be done the same way //
    if (name == ""){ // if name left blank //
        document.getElementById("name").style.border = "3px solid red";
        var encourage = prompt("Please enter a name.", "");
        if (encourage != "") {
            document.getElementById("name").value = encourage;
        }
        return false;
    }else {
        document.getElementById("name").style.border = "3px double cyan";
    }
    localStorage.setItem("appName",name);
    localStorage.setItem("appDate",date);
    localStorage.setItem("appquantity", quantity);
    localStorage.setItem("apppurchased", purchased);
    localStorage.setItem("appnotes", notes)
} 

// fixed the .values that were in the incorrect places 
// can't get this project into github. Same problem as before 
function getItems(){
    if (localStorage.getItem("appname")){
        var name      = localStorage.getItem(appname);
        var date      = localStorage.getItem(appdate);
        var quantity  = localStorage.getItem(appquantity);
        var purchased = localStorage.getItem(apppurchased);
        var notes     = localStorage.getItem(appnotes); 
    }
    var viewForm;[
        name,
        date,
        quantity,
        purchased,
        notes,
    ];
  
// collapsing the form

  document.getElementById("main").style.display = "none";
  document.getElementById("clear").style.display = "block";
  var clearLink = document.getElementById("clear");
    for (var i = 0, j = viewInfo.length; i<j; i ++){
       (var newPara = document.createElement("p");
       var itemTxt = document.createTextNode(viewInfo [i]);
      newPara.appendChild(itemTxt);
      getListdiv.appendChild(newPara);
    }
 
    alert(viewForm);
}
function clearLocal(){
    localStorage.clear();
    return false
}



 
// trying to fix my form validation, getting extremely frustrated





