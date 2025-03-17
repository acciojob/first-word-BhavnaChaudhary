
function firstWord(str) {
    if (!str) return str; // Return empty string if input is empty or null
    let index = str.indexOf(' ');
    return index === -1 ? str : str.substring(0, index);
}

// Do not change the code below

const str = prompt("Enter String:");
alert(firstWord(s)); 
