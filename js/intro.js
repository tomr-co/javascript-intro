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

// An array ( list, collection etc ) of people - can be used to display latest blog posts, imgs etc
var people = ["Tom","Chop","cones"];

console.log( people );

console.log( people[0] )

//loop over all te people in the people array and display their name in the console     
// ( i is short for iteration )
for( var i = 0; i < people.length; i++ ) {
	console.log( people[i] );
}

// Tell javascript to find the button with the id "Hello"

var helloButton = document.querySelector("#hello");

// Listen for clicks on the hello button
helloButton.onclick= function(){
	alert("hell");
}

// A function that calculates the grand total
function calculateGrandTotal( prices ) {

	console.log( prices );

	//create a variable to hold the grand total.
	var grandTotal = 0;

	//loop over all the prices
	for(var i = 0; i < prices.length; i++)  {
		grandTotal = grandTotal + prices[i];
	}

	//Display the Grand total
	console.log( grandTotal );

}

//some shopping carts
var cart1 = [20, 15, 60, 90, 100];
var cart2 = [10.99, 9.99, 60.99, 999.99]


//below code runs the function

calculateGrandTotal(cart1);
calculateGrandTotal(cart2);








