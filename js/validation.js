//find the form
var registrationForm = document.querySelector("#registration");

//Wait for the user to submit the form
registrationForm.onsubmit = function(event) {

	// Count how many errors there are
	var totalErrors = 0; 
	
	// Get references to the input fields
	var usernameInput =document.querySelector("#username");
	var usernameMessage = document.querySelector("#username-message");
	var nameInput= document.querySelector("#full-name");
	var nameMessage = document.querySelector("#full-name-message");
	var campusMessage = document.querySelector("#campus-message")
	var campusOptions = document.querySelectorAll("[name=campus]")


	// Check the username
	if( usernamePattern.test( usernameInput.value ) ) { 
		// Username is valid
		usernameMessage.innerHTML = "";

	} else{
		//username is invalid
		usernameMessage.innerHTML = "Username is invalid";
		totalErrors++;

	}

// Check the name
	if( namePattern.test( nameInput.value ) ) { 
		// name is valid
		nameMessage.innerHTML = "";

	} else{
		//name is invalid
		nameMessage.innerHTML = "name is invalid";
		totalErrors++;

	}

	//loop over all the campus options
	var campusIsSelected = false;

	for(var i=0; i<campusOptions.length; i++) {

		// check if this campus has been selected 
		if( campusOptions[i].checked ) {
			campusIsSelected = true;
		}
	}

	// if campus is selected is still false
	if (campusIsSelected == false) {
		campusMessage.innerHTML = "please select a campus"
		totalErrors++;
	} else {
		campusMessage.innerHTML = ""
	}


	// If the total errors is greater than 0
	if( totalErrors > 0 ) {
		// stop the form from submitting
		event.preventDefault();

	}
}










