// Simulate an asynchronous function that returns a promise
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe", role: "Admin" };
            resolve(data);
        }, 3000); // Simulates a 3-second delay
    });
}

// Async function that fetches data and handles it
async function displayUserData() {
    console.log("Fetching user data...");

    // Await the result of fetchUserData
    try {
        const userData = await fetchUserData();
        console.log("User Data:", userData);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Call the async function
displayUserData();