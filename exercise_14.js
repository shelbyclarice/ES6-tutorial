// Distance Traveled
var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function (sum, trip) {
  return trip.distance + sum;
}, 0);




// Notes from Lessons

// Reduce Helper - Most flexible helper

 var numbers = [ 10, 20, 30 ];
 var sum = 0;

 // For loop
 for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
 }

 "---"

 // , 0 is the initial value
 // function(sum is the initial value, number is the array)
 numbers.reduce(function(sum, number) {
  return sum + number;
 }, 0);


// Default value will be an array [] instead of a number
 var primaryColors = [
  {color: 'red' },
  {color: 'yellow' },
  {color: 'blue' },
 ];

 // function(previous is the initial value, primaryColor is the array)
 // Common first aurguments one might see would be previous, accumulator (ACC), or mem
 primaryColors.reduce(function(previous, primaryColor) {
  // Mutate the array
  previous.push(primaryColor.color);

  // After mutating, then we return it
  return previous;
 }, []);



 // Practical use cases of reduce helper
 // With every opening '(', there must be a closing ')' for it to be balanced, otherwise its unbalanced
 // char represents a single character (short for character), so in this case a single parethese
 function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    // this if statment will correct if balancedParens(")(") it will recognize that it is still false despite of it being balanced
    if (previous < 0) {return previous; }
    if (char === "(") { return ++previous; }
    if (char === ")") { return --previous; }
    // Put return previous in case there are other characters in balancedParens like (sdfsdfsdf); it will make sure we still return our counter anyways
    return previous;
    // Creating a counter - with every '('')', it will add 1 or decrease 1
  }, 0);
 }

 // Returns not balanced with the value of 4 "((((", with ! in front of string.split, any value above or under 0 will return false instead of a number
 balancedParens("(())");

