const fibonacci = function(index) {
    //each entry in the series is the sum of the previous two entries
    //1, 1, 2, 3, 5, 8, 13, 21, 34, 55, etc

    //convert to number
    index = +index;

    //reject negatives
    if (index < 0) {
        return "OOPS";
    }

    //start with first two numbers in series
    const fibo = [1, 1];

    //after that can calculate based on the number selected
    for (let i = 0; i < index; i++) {
        //check if index exists
        if (fibo[i] === undefined) {
            fibo[i] = fibo[i-2] + fibo[i-1];
        }
    }

    //return the value at the desired index (but we start from 0)
    return fibo[(index-1)];

};

//to optimize this we might want to store the current index value in a 
//global variable and then only update the array if the index is
//higher than the current vector length. 

// Do not edit below this line
module.exports = fibonacci;
