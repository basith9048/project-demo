// Simulate an asynchronous function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched from the server!");
        }, 2000); // Simulates a 2-second delay
    });
}

// Async function to demonstrate `await`
async function getData() {
    console.log("Fetching data...");

    // Use await to pause until the promise is resolved
    const result = await fetchData();

    // Continue execution after the promise is resolved
    console.log("Result:", result);
}

// Call the async function
getData();