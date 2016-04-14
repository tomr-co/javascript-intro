	// Patterns to use in Validation
	var usernamePattern = new RegExp("^[a-zA-Z0-9._-]{3,20}$");  // by putting ^ at the start and $ the end, it tells te browser dont look at individual words, look at the entire combo to make sure its valid
	var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");