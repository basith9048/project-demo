const fs = require('fs');

// 1. Write data to a file
function writeFile(filename, data) {
    fs.writeFileSync(filename, data);
    console.log(`File "${filename}" has been written.`);
}

// 2. Read data from a file
function readFile(filename) {
    try {
        const data = fs.readFileSync(filename, 'utf8');
        console.log(`Data read from "${filename}":\n`, data);
    } catch (err) {
        console.error(`Error reading file "${filename}":`, err.message);
    }
}

// 3. Append data to a file
function appendToFile(filename, data) {
    fs.appendFileSync(filename, data);
    console.log(`Data has been appended to "${filename}".`);
}

// 4. Delete a file
function deleteFile(filename) {
    try {
        fs.unlinkSync(filename);
        console.log(`File "${filename}" has been deleted.`);
    } catch (err) {
        console.error(`Error deleting file "${filename}":`, err.message);
    }
}

// 5. Rename a file
function renameFile(oldName, newName) {
    try {
        fs.renameSync(oldName, newName);
        console.log(`File has been renamed from "${oldName}" to "${newName}".`);
    } catch (err) {
        console.error(`Error renaming file "${oldName}":`, err.message);
    }
}

// 6. Check if a file exists
function fileExists(filename) {
    if (fs.existsSync(filename)) {
        console.log(`File "${filename}" exists.`);
    } else {
        console.log(`File "${filename}" does not exist.`);
    }
}

// Testing the functions
const filename = 'example.txt';
const newFilename = 'renamed_example.txt';

// 1. Write to a file
writeFile(filename, 'This is a test file.\n');

// 2. Read from the file
readFile(filename);

// 3. Append data to the file
appendToFile(filename, 'Appending some more data...\n');

// 4. Check if the file exists
fileExists(filename);

// 5. Rename the file
renameFile(filename, newFilename);

// 6. Check if the renamed file exists
fileExists(newFilename);

// 7. Read the renamed file
readFile(newFilename);

// 8. Delete the renamed file
deleteFile(newFilename);

// 9. Check if the deleted file exists
fileExists(newFilename);