const form = document.getElementById("formContact");
//const success = document.getElementById("formSuccess");

//Button - Not available to submit until validate
let submitBtn = document.getElementById("submitButton");
submitBtn.disabled = true;

// Inputs 
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const country = document.getElementById("country");
const reason = document.getElementById("reason");
const message = document.getElementById("message");

// Errors
const fullnameError = document.getElementById("fullnameError");
const emailError = document.getElementById("emailError");
const countryError = document.getElementById("countryError");
const reasonError = document.getElementById("reasonError");
const messageError = document.getElementById("messageError");


//Reset all the variables, accion called by the Reset Button
function resetErrors() {
	fullnameError.textContent = "";
	emailError.textContent   = "";
	countryError.textContent = "";
	reasonError.textContent  = "";
	messageError.textContent = "";	
			
	touched.fullname = false;
	touched.email    = false;
	touched.country  = false;
	touched.reason   = false;
	touched.message  = false;

	submitBtn.disabled = true;	
}

const touched = {
	fullname: false,
	email: false,
	country: false,
	reason: false,
	message: false
};


let bValid;

// bSubmit is a parameter. 
// bSubmit and touched variables make possible the validation once the user has started typing on one field.

function validateForm(bSubmit = false){

	bValid = true;
	
	// Full Name
	let fullErr = "";
	if (fullname.value.length < 2) {
		fullErr = "Please enter your full name (min. 2 characters).";
		bValid = false;
	}
	if (bSubmit || touched.fullname) {
		fullnameError.textContent = fullErr;
	}
	

	// --- Email ---
	let emailErr = "";
	const emailValue = email.value.trim();
	if (emailValue == "" ||
		!emailValue.includes("@") ||
		!emailValue.includes(".")
	){
		emailErr = "Please enter a valid email.";
		bValid = false;
	}
	if (bSubmit || touched.email) {
		emailError.textContent = emailErr;
	}
		
	
	// --- Country ---
	let countryErr = "";
	if (country.value === "") {
	  countryErr = "Please select your country.";
	  bValid = false;
	}
	if (bSubmit || touched.country) {
	  countryError.textContent = countryErr;
	}


	// --- Reason ---
	let reasonErr = "";
	if (reason.value === "") {
		reasonErr = "Please choose a category for your message.";
		bValid = false;
	}	
	if (bSubmit || touched.reason) {
		reasonError.textContent = reasonErr;
	}


	// --- Message ---
	let messageErr = "";
	if (message.value.length < 10) {
	  messageErr = "Please enter a message (min. 10 characters).";
	  bValid = false;
	}
	if (bSubmit || touched.message) {
	  messageError.textContent = messageErr;
	}
	

	// If everything has been verified, the button is available
	submitBtn.disabled = !bValid; // not bValid should be false because it has been declared as true. 
	
	return bSubmit ? bValid : true;
}


// Function to stay in the same page, and do not get refresh after submit. 
form.addEventListener("submit", function(e) {
e.preventDefault(); 


if (validateForm(true)) {
	let msg = document.getElementById("formSuccess");
	msg.innerHTML = "Thank you. </br> We will get back to you within 48 hours.";

	document.getElementById("contactFieldset").classList.add("hiddenFieldset");

	form.reset();
	submitBtn.disabled = true;

	// Reset
	resetErrors();
}
});



// Checking the input in realtime
[fullname, email, country, reason, message].forEach(input => {
	input.addEventListener("input", () => {
		touched[input.id] = true;
		validateForm(false);
	});
});

