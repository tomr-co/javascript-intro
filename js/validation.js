//find the form
var registrationForm = document.querySelector("#registration");

//Wait for the user to submit the form
registrationForm.onsubmit = function(event) {

	// Patterns to use in Validation
	var usernamePattern = new RegExp("^[a-zA-Z0-9._-]{3,20}$");  // by putting ^ at the start and $ the end, it tells te browser dont look at individual words, look at the entire combo to make sure its valid
	var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");
	

	// Get references to the input fields
	var usernameInput =document.querySelector("#username");
	var usernameMessege = document.querySelector("#username-message");
	var nameInput= document.querySelector("#full-name");
	var nameMessege = document.querySelector("#full-name-message");

	// Check the username
	if( usernamePattern.test( usernameInput.value ) ) { 
		// Username is valid
		usernameMessege.innerHTML = "";

	} else{
		//username is invalid
		usernameMessege.innerHTML = "Username is invalid";

	}

// Check the name
	if( namePattern.test( nameInput.value ) ) { 
		// name is valid
		nameMessege.innerHTML = "";

	} else{
		//name is invalid
		nameMessege.innerHTML = "name is invalid";

	}


	// stop the form from submitting
	event.preventDefault();

}








