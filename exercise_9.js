// Finding Admin Users
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

var admin = users.find(function (user) {
  return user.admin;
});



// Notes from Lessons

// Find Helper

var users = [
  {name: 'Jill' },
  {name: 'Alex' },
  {name: 'Bill' }
];
var user;

// For loop
for (var i = 0; i < users.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
  }
}

user;

// Drawback is if two elements in the array return true, only the first one is going to be returned by the find helper

users.find(function(user) {
  return user.name === 'Alex';
});



function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});



var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post'}
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);



// Using Find Helper in a practical sense
// Having a list of posts on a forum - a user can click on one for example the 45th post it pulls on a seperate page. Can find the post with ID 45.