// Function to be executed after a delay
function greetUser() {
    console.log("Hello, John Doe! Welcome to Node.js.");
}

// Setting a timeout to call greetUser after 3 seconds
console.log("Greeting will appear in 3 seconds...");
setTimeout(greetUser, 3000); // 3000 milliseconds = 3 seconds

// Optional: Demonstrate that code continues executing
console.log("This message appears immediately.");