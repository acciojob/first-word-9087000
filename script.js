function firstWord(s) {
    // If the string is empty, return an empty string
    if (s.length === 0) {
        return '';
    }

    // Find the first space in the string
    let spaceIndex = s.indexOf(' ');

    // If no space is found, return the entire string
    if (spaceIndex === -1) {
        return s;
    }

    // Return the substring up to the first space
    return s.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
console.log(firstWord(s));
