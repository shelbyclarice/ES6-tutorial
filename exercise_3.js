// Plucking Values
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function (image) {
  return image.height;
});




// Notes from Lessons

// Map Helper
// Avoiding mutating or changing data on the numbers
var numbers = [1,2,3];
var doubleNumbers = [];

// For Loop
for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

// return keyword inside mapping function important otherwise it wouldn't double the numbers and come out [null,null,null]
var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled;
doubleNumbers;



// More complicated example with map
// Making an array of cars
var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

// Refer to as Pluck because plucking a particular property off of each object
var prices = cars.map(function(car) {
  return car.price;
});

prices;



// Using more Practical ways to use map
// Map most commonly used array helpers for front end web development
// Showing a list of friends posts - using Map to show each individual friend name and post