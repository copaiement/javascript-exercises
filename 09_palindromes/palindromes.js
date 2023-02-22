const palindromes = function (string) {
    //create string of all letters with no spaces, punctuation, or caps
    string = string.toLowerCase();
    let cleaned = "";
    for (let i = 0; i < string.length; i++) {
        cleaned = (/^[a-z]*$/.test(string[i]))
                    ? cleaned + string[i]
                    : cleaned;
    }
    
    let cleanedBack = "";

    //reverse string
    for (let j = (cleaned.length-1); j >= 0; j--) {
        cleanedBack += cleaned[j];
    }

    return (cleaned === cleanedBack);

};

// Do not edit below this line
module.exports = palindromes;
