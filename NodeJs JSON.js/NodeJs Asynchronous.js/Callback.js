// Simulate an asynchronous operation using a callback
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "John Doe", role: "Admin" };
        // Call the callback function and pass the fetched data
        callback(null, data); // First parameter is an error (null in this case)
    }, 2000); // Simulates a 2-second delay
}

// Function to handle the fetched data
function handleData(error, data) {
    if (error) {
        console.log("Error fetching data:", error);
        return;
    }
    console.log("Fetched Data:", data);
}

// Call the fetchData function and pass handleData as a callback
fetchData(handleData);