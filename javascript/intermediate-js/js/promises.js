// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// CALLBACKS
let promise = new Promise(function(resolve, reject) {    
    // Make an asynchronous call and either resolve or reject
    if (true) {
        resolve("I am done");
    } else {
        reject("I am not done");
    }
});

// RESOLVE AND REJECT
/*
Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.
*/

/* PROMISE STATES
pending: Initially when the executor function starts the execution.
settled
    fulfilled: When the promise is resolved.
    rejected: When the promise is rejected.
*/

/* PROMISE RESULT VALUES
undefined: Initially when the state value is pending.
value: When resolve(value) is called.
error: When reject(error) is called.
*/

promise
    .then(res => console.log(res)) // for resolves
    .catch(err => console.log(err)); // for rejects/errors

// Chain then
promise
    .then(response => response + "!")
    .then(response => {
        throw new Error(response);
    })
    .catch(err => console.log(err))

// ASYNC/AWAIT
async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); // does not proceed to the next line until finished
    const data = await res.json(); // does not proceed to the next line until finished
    console.log(data);
}

fetchUsers();

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
}))
    .then(arr => {
        console.log("Users", arr[0]);
        console.log("Posts", arr[1]);
        console.log("Albums", arr[2]);
    })
    .catch(() => console.log("Oops"));

const getData = async function() {
    // for async/await, use try/catch
    try {
        // Show difference with and without await
        const [ users, posts, albums ] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json());
        }))
    
        console.log("Users", users);
        console.log("Posts", posts);
        console.log("Albums", albums);
    } catch {
        // Mispell a url to show error 
        console.log("Oops");
    }
}

getData();