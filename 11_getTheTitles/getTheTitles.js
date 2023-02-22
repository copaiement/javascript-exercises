const getTheTitles = function(array) {
    //Get array of objects as an input


    //return array of just the titles
    const titleArray = array.map((books) => books.title);
    return titleArray;

};

// Do not edit below this line
module.exports = getTheTitles;
