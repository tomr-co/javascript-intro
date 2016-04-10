//Make sure you open up the console in your browser! - single line comment

console.log("Hello");

/* mulit line comment
format , same as css comments
*/

//variable that holds my name
var myName = "abcdesfingt";

// how many characters are in my name?
console.log(myName.length);

//variable that holds my age 
var myAge = 23;

// If the user is older than 21
if( myAge >= 21 ) {
	console.log("You are an ADULT");
} 

else if( myAge >= 13) {
	console.log("you are a teenager");

}
else {
	console.log("you are a child");	
}

// Check the length of the visitors name
if( myName.length == 0 ) {
	console.log("your name is required");
} else if( myName.length > 10 ) {
	console.log( "your name must be at most 10 characters. You have written " + myName.length );
}