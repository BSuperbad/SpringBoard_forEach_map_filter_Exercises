//forEach
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    let doubledArr = [];
    arr.forEach(function (val) {
        doubledArr.push(val * 2);
    });
    return doubledArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    let evenArray = [];
    arr.forEach(function (val) {
        if (val % 2 === 0) {
            evenArray.push(val);
        };
    });
    return evenArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    let firstLast = [];
    arr.forEach(function (val) {
        firstLast.push(val[0] + (val[val.length - 1]));
    });
    return firstLast;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    let newKeyArr = [];
    arr.forEach(function (obj) {
        obj[key] = value;
    });
    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the 
vowel and the values as the number of times the vowel appears in the string. This 
function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let obj = {};
    const lowerCased = str.toLowerCase();


    lowerCased.split('').forEach(char => {
        if (vowels.includes(char)) {
            if (!obj[char]) {
                obj[char] = 0;
            }
            obj[char]++;
        }

    });
    return obj;
}

//map
/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function (value) {
        return value * 2;
    });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
    return arr.map(function (value, index) {
        return value * index;
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
    return arr.map(function (obj) {
        return obj[key];
    });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a 
new array with the value of the key with a name of "first" and the value of a key with the 
name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) 
    // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    return arr.map(function (obj) {
        return `${obj.first} ${obj.last}`;
    })
}

//filter
/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function (obj) {
        return obj[key];
    })

}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.filter(function (val) {
        return val === searchValue;
    })[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function (obj) {
        return obj[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = 'aeiou';
    //declaring a string of vowels
    const arr = str.toLowerCase().split("");
    //creating a new array built of the passed in str and immediately making it lowercased, and
    //splitting each character in the new array
    return arr.filter(function (char) {
        //filtering through newly created filter by each character
        return vowels.indexOf(char) === -1;
        // only returning the index of the first occurance of the specified character
        //in the string (or -1 if not present)
        //if char is not a vowel (returning as -1), the expression will return true 
        // because the character is not a vowel
        //filter goes through ALL the characters of the array and only returns and array
        // containing those non vowel characters
    }).join("");
    //here we use the .join method to join together all of the characters in the array
    //and convert the array back into a new string


}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with 
all of the odd numbers doubled (HINT - you can use map and filter to double and then filter 
    the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter(function (num) {
        //filters through the function by going through each value (num)
        return num % 2 === 1;
        //returning only numbers that are odd
    }).map(function (num) {
        //then chaining on .map to the function to return a new array of the same length as arr.filter
        //but with the values (num) multiplied by 2
        return num * 2;
    });

}
// chaining on filter and then map, so its like arr.filter.map but with everything filled in