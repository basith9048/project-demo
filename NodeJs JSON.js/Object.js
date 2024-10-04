// Example JavaScript object
const employee = {
    id: 101,
    name: "John Doe",
    position: "Software Engineer",
    isActive: true,
    skills: ["Node.js", "JavaScript", "React"],
    address: {
        city: "New York",
        zipCode: "10001"
    }
};

// 1. Convert the JavaScript object to a JSON string
const jsonString = JSON.stringify(employee);
console.log("JSON Stringified Object:\n", jsonString);

// 2. Parse the JSON string back into a JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log("\nParsed JavaScript Object:", parsedObject);

// 3. Access object properties
console.log("\nEmployee Name:", parsedObject.name);
console.log("Employee Position:", parsedObject.position);

// 4. Access nested object properties
console.log("Employee City:", parsedObject.address.city);

// 5. Modify an object property
parsedObject.isActive = false;
console.log("\nUpdated Employee Active Status:", parsedObject.isActive);