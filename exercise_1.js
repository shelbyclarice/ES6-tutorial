// Moving away from For Loops
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(function(post) {
      savePost(post);
    });
}


// Array Helper Methods = forEach, map, filter, find, every, some, reduce

// Notes from lessons

// ForEach Helper
// forEach array - the ES6 way 
// Iterator Function inside the forEach
// Red, green and blue passed, iterator function funs and goes off and does something

var colors = {'red', 'blue', 'green'};

colors.forEach(function(color) {
  console.log(color);
});

// For loop - the ES5 way
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}



// Create an array of numbers
var numbers = [1,2,3,4,5];

// Create a variable to hold the sum
var sum = 0;

function adder(number) {
  sum += number;
}

// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// print the sum variable
sum;



// Real World Experience - User clicks on Delete All Selected Button then this happens
emails.forEach(function(email) {
  deleteEmail(email);
});
