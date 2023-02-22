const findTheOldest = function(peopleArray) {

    //check age. if death year dne, use date function to get this year

    //sort to get oldest first
    const oldest = peopleArray.sort(function(a,b) {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = new Date().getFullYear();
        }

        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;

        return (aAge > bAge ? -1 : 1);

    });

    //return first person object
    return oldest[0];
};

// sample input
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

// Do not edit below this line
module.exports = findTheOldest;
