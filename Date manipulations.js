// Function to format the current date
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

// Function to add days to a date
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

// Function to subtract days from a date
function subtractDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}

// Function to calculate the difference between two dates in days
function dateDifference(date1, date2) {
    const timeDifference = date2.getTime() - date1.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24); // Convert milliseconds to days
    return Math.round(dayDifference);
}

// Function to get specific parts of the date
function getDateParts(date) {
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1, // Months are zero-indexed
        day: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
}

// Testing the functions
const currentDate = new Date();
console.log("Current Date:", formatDate(currentDate));

const dateAfter5Days = addDays(currentDate, 5);
console.log("Date after 5 days:", formatDate(dateAfter5Days));

const dateBefore7Days = subtractDays(currentDate, 7);
console.log("Date 7 days ago:", formatDate(dateBefore7Days));

const date1 = new Date("2024-10-01");
const date2 = new Date("2024-10-10");
console.log(`Difference between ${formatDate(date1)} and ${formatDate(date2)}:`, dateDifference(date1, date2), "days");

const parts = getDateParts(currentDate);
console.log("Date parts:", parts);