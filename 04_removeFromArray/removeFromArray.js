const removeFromArray = function(...input) {
    // create array from first input argument
    let array = input[0];
    // loop through the rest of the input arguments
    for (let arg = 1; arg < input.length; arg++) {    
        // check each arg against the input array
        for (i = 0; i < array.length; i++) {
            if (array[i] === input[arg]) {
                let removed = array.splice(i,1);
            }
        }
    }    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
