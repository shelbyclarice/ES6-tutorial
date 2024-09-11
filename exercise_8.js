// Implementing reject
function reject(array, iteratorFunction) {
  return array.filter((element) => {
    return !iteratorFunction(element);
  });
}

// Promise.reject()
// The Promise.reject() method returns a Promise object rejected with a value.
// Promise.reject(message)
// Example: Promise.reject("Not Allowed");
