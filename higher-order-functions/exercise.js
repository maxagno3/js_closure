// Challenge 1
function addTwo(num) {
    function addNum() {
        return num + 2;
    }
    return addNum();
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
    function addWord() {
        return (`${word}` + 's');
    }
    return addWord();
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i));
    }
    return newArray;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let newArr = []
    array.forEach(el => {
        newArr.push(callback(el));
    });
    return newArr;
}

//Extension 2
function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    // for(let element of array){
    //     accumulator = callback(accumulator,element);
    // }
    // return accumulator;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(array[i], accumulator);
    }
    return accumulator;
}

//Extension 3
function intersection(...arrays) {
    return arrays.reduce((acc, cv) => {
        acc = acc.filter(el => cv.includes(el))
        return acc;
    })
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
    return arrays.reduce((acc, cv) => acc.includes(cv));
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    let emptyObj = {};
    array1.reduce((acc,cv,i) => {
        if(callback(cv) == array2[i]){
            emptyObj[cv] = array2[i];
        }
        return acc;
    },{})
    return emptyObj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce((acc,cv) => {
       acc[cv] = arrCallbacks.reduce((el, val) => {
        el.push(val[cv]);
        return el;
       },[])
       return acc;
    },{})
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }