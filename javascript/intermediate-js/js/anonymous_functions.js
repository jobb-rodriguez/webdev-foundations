// Unnamed Function
let greet = function (platform) { 
    console.log("Welcome to ", platform); 
}; 
  
greet("America!"); 

// Arrow Function
let greetArrow = (platform) => {
    console.log("Welcome to ", platform); 
}
  
greetArrow("Philippines!");

function test (func_callback) {
    setTimeout(func_callback, 3000)
}

test(() => {
    console.log("hello!")
})
