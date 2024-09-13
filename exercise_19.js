// Template Strings in Practice
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}



// Notes from Lessons

// Template Strings
// ES5
function getMessage() {
  const year = new Date().getFullYear();

  return "The year is " + year;
}

getMessage();

// ES6 - get the year minus 1 = 2023
function getMessage() {
  const year = new Date().getFullYear();

  return `The year is ${year - 1}`;
}

getMessage();

// Year is 2024
// OR can put expressino inside {} would not need that additional declaration
function getMessage() {
  return `The year is ${new Date().getFullYear()}`;
}

getMessage();


// If the message is just the year - do not need extra stuff
const year = 2024;
const yearMessage = `${year}`;
yearMessage;

// Use this instead
const year = 2024;
const yearMessage = year;
yearMessage;