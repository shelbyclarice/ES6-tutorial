// Filtering Values
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function (number) {
  return number > 50;
});



// Notes from Lessons

// Filter Helper
// An array of Objects - Each object represents a single product and has a name and a type
// User can filter and check a box that says only show me fruits or vegetables

var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
];

var filteredProducts = [];

// For Loop
for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

// Want to create a subset of arrays we have rather than delete data or mutating an existing array

// product.type === 'fruit' - this will produce a true or false statment and immediatly returning it with return statment
// === means equals
// no need to produce an if statment
products.filter(function(product) {
  return product.type === 'fruit';
});



// Filter to show vegetables that are in stock (greater than 0) that are not more expensive than 10.
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 15 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

// Type is 'vegetable' quantity is greater than 0, price is less than 10
// Need to return a booleen value (either a true or false)
// && = and
products.filter(function(product) {
  return product.type === 'vegetable'
    && product.quantity > 0 
    && product.price < 10
});



// Comments for posts
var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
];

function commentsForPosts(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.Id;
  });
}

commentsForPosts(post, comments);
