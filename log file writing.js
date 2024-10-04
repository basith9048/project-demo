const fs = require('fs');
const path = require('path');

// Function to log messages to a file
function logMessage(message) {
    const logDir = 'logs';
    const logFile = path.join(logDir, 'app.log');

    // Ensure the logs directory exists
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    // Format the log message with a timestamp
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;

    // Append the log message to the file
    fs.appendFileSync(logFile, logEntry);
    console.log('Log message written:', message);
}

// Testing the log function
logMessage('Application started');
logMessage('User logged in');
logMessage('An error occurred: Invalid user input');