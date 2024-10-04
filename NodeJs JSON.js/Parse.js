// Example JSON string
const jsonString = `{
    "id": 101,
    "name": "John Doe",
    "position": "Software Engineer",
    "skills": ["Node.js", "JavaScript", "React"],
    "isActive": true,
    "address": {
        "city": "New York",
        "zipCode": "10001"
    }
}`;

// Parse the JSON string back into a JavaScript object
const employeeObject = JSON.parse(jsonString);

// Access properties of the object
console.log("Parsed JavaScript Object:", employeeObject);
console.log("Employee Name:", employeeObject.name);
console.log("Employee Skills:", employeeObject.skills);
console.log("Employee Address:", employeeObject.address.city);

// Check if the employee is active
if (employeeObject.isActive) {
    console.log("This employee is currently active.");
} else {
    console.log("This employee is not active.");
}