// Function to be executed at intervals
function displayTime() {
    const now = new Date();
    console.log(`Current Time: ${now.toLocaleTimeString()}`);
}

// Setting an interval to call displayTime every 2 seconds
const intervalId = setInterval(displayTime, 2000); // 2000 milliseconds = 2 seconds

// Optional: Demonstrate stopping the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped displaying time.");
}, 10000); // Stop after 10 seconds