function firstWord(s) {
  // your code here
  if(s.length === 0) {
	  return '';
  }	
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
alert(firstWord(s));
