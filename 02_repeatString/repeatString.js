const repeatString = function(string, num) {
    let pattern = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i ++) {
        pattern += string;
    }
    return pattern;
};

// Do not edit below this line
module.exports = repeatString;
