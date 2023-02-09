const sumAll = function(input1, input2) {
    // initialize variables
    let start = 0;
    let end = 0;
    let sum = 0;
    // clean input values
    if (input1 < 0 || 
        input2 <0 ||
        typeof(input1) !== 'number' ||
        typeof(input2) !== 'number') {
        return 'ERROR';
    }

    // set start and stop regardless of order
    if (input1 > input2) {
        start = input2;
        end = input1;
    } else {
        start = input1;
        end = input2;
    }

    for (let i = start; i <= end; i ++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
