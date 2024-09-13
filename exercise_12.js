// Finding Submitted Users
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true },
];

var hasSubmitted = users.every(function (user) {
  return user.hasSubmitted;
});




// Notes from Lessons
// Every and Some Helpers

// Every Helper - && (and) between each value - do all records in this array satisfy this criteria?
// Do all records contain atleast 16gb of ram?

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];


var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

// For Loop
for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

"---"
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;
"+++"

computers.every(function(computer) {
  return computer.ram > 16;
});

// Some Helper - || (or) between each value - do any records in this array satisfy this criteria?
// Do any records contain atleast 16gb of ram?

computers.some(function(computer) {
  return computer.ram > 16;
});



// Another example of Every and Some Helper
var names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

names.every(function(name) {
  return name.length > 4;
});

names.some(function(name) {
  return name.length > 4;
});

// Practical Example of Every Helper
// Login form should have password to login. Before user signs user in, validate the inputs

function Field(value) {
  this.value = value;
}

// Prototypes will be discussed later in course
Field.prototype.validate = function() {
  return this.value.length > 0;
};

var username = new Field("2cool");
var password = new Field("my_password");
var birthdate = new Field("10/10/2010");

var fields = [username, password, birthdate];

fields.every(function(field) {
  return field.validate();
});

if (formIsValid) {
  // allow user to submit
} else {
  // show an error message
}


