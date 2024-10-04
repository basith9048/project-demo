// Example Object
const employee = {
    id: 101,
    name: "John Doe",
    position: "Software Engineer",
    skills: ["Node.js", "JavaScript", "React"],
    isActive: true,
    address: {
        city: "New York",
        zipCode: "10001"
    }
};

// Convert the object to a JSON string
const jsonString = JSON.stringify(employee);

// Log the JSON string
console.log("JSON Stringified Object:", jsonString);

// Pretty Print the JSON string with indentation
const prettyJsonString = JSON.stringify(employee, null, 4);
console.log("\nPretty Printed JSON String:\n", prettyJsonString);