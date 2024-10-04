// Example JavaScript array
const employeeArray = [
    {
        id: 101,
        name: "John Doe",
        position: "Software Engineer",
        isActive: true
    },
    {
        id: 102,
        name: "Jane Smith",
        position: "Product Manager",
        isActive: false
    },
    {
        id: 103,
        name: "Robert Brown",
        position: "UI/UX Designer",
        isActive: true
    }
];

// 1. Convert the JavaScript array to a JSON string
const jsonArrayString = JSON.stringify(employeeArray);
console.log("JSON Stringified Array:\n", jsonArrayString);

// 2. Parse the JSON string back into a JavaScript array
const parsedArray = JSON.parse(jsonArrayString);
console.log("\nParsed JavaScript Array:", parsedArray);

// 3. Access elements in the parsed array
console.log("\nFirst Employee Name:", parsedArray[0].name);
console.log("Second Employee Position:", parsedArray[1].position);

// 4. Loop through the array and print the active employees
console.log("\nActive Employees:");
parsedArray.forEach(employee => {
    if (employee.isActive) {
        console.log(`${employee.name} (${employee.position})`);
    }
});