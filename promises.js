// Promises - 3 states (unresolved)(resolved)(rejected) - After a promise is created there is (status resolved -> callback 'then') or (status rejected -> callback 'catch')
promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(); // or reject(); will come out with .then or .catch
    }, 3000); // Message comes 3 seconds later
});

promise
    .then(() => console.log('finally finished!'))
    .then(() => console.log('i was also ran!!!'))
    .catch(() => console.log('uh oh!!'))


// Practical use - Ajax request
promise = new Promise((resolve, reject) => {
    var request = new XHTMLRequest()
    // make request
    request.onload = () => {
        resolve();
    };
});

promise
    .then(() => console.log('finally finished!'))
    .then(() => console.log('i was also ran!!!'))
    .catch(() => console.log('uh oh!!'))



// Fetch Helper - just like promises implemented inside of browser already, new object available in browser, can use it to make Ajax requests
url = "https://jsonplaceholder.typicode.com/posts/";

// Fetch not as recomended compared to using Ajax ulitity libaries like Axios or Super Agent or JQuery
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))

// Shortcomings of using Fetch
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
    .then(response => console.log(response))
