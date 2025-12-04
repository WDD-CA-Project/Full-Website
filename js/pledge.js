// Hide the thank-you section initially
document.getElementById("pledged").style.display = "none";

//Button disabled
var myTargetElementBtn = document.getElementById("myBTN");
myTargetElementBtn.disabled = true;

// Get references to checkbox elements
var pledge1 = document.getElementById("pledge1");
var pledge2 = document.getElementById("pledge2");
var pledge3 = document.getElementById("pledge3");

	
function authenticateMe(){
	
	if(pledge1.checked || pledge2.checked || pledge3.checked){
		myTargetElementBtn.disabled = false;																		
	}else{
		myTargetElementBtn.disabled = true;
	}
	
}

function authenticateUser(){
	document.getElementById("pledging").style.display = "none";
	document.getElementById("pledged").style.display = "block";
}
