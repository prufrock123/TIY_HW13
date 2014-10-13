// 1.

function myForEach(array, callback) {
    "use strict";
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}


yayArray = [34,555,999,"cool","no way!"]
//#2 - Custom Map Function: returns a new array after the ForEach modifies the argument
function myMap(origArray, callback) {
    //create a new array
    var newArray = []

    //any function passed to the 2nd argument in
    //  customForEach 
    function mapSomeShit(val,i,array){
        newArray.push(callback(val,i,arr))
    }

    myForEach(origArray,mapSomeShit)

    return newArray
}

function myReduce(origArray, callback){
    var prev = null,
        curr
    function reduceSomeShit(prev,curr,indx,array){
    
    }

    myForEach(origArray,reduceSomeShit)

}

//--------------
//3 Pluck
//--------------

var stooges = [{
    name: "moe",
    age: 40
}, {
    name: "larry",
    age: 50
}, {
    name: "curly",
    age: 60
}];



function pluck(arrayOfObj,propName){
    var pluckedArray =[]
    for(var i = 0; i<arrayOfObj.length ;i++){
        for(var prop in arrayOfObj[i]){
            if(prop == propName){
                pluckedArray.push(arrayOfObj[i][prop])
            }
        }
    }
    return pluckedArray
}

console.log("\n-------#3:Pluck------")

var propQry = 'name'
console.log("Original Object:")
console.log(stooges)
console.log("\n Plucked Property: "+propQry)
console.log("\nReturned 'Plucked' Array:")
var namesOfStooges = (pluck(stooges,propQry))
console.log(namesOfStooges)


//Julie//

// function filter(array, test) {
//     var passed = [];
//     for (var i = 0; i < array.length; i++) {
//         if (test(array[i]))
//             passed.push(array[i]);
//     }
//     return passed;

// }

// function map(array, transform) {
//     var mapped = [];
//     for (var i = 0; i < array.length; i++)
//         mapped.push(transform(array[i]));
//     return mapped;
// }

// var pluck = stooges.filter(function(sto) {
//     return sto.name;
// });
// console.log(map(pluck, function(sto) {
//     return sto.name;

//   console.log(pluck(stooges,'name'))  
// }));


//---------------
//4 Reject
//---------------

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function reject(array, predicate) {
    var rejectList = []
    for (var i = 0; i < arr.length; i++) { 
        if (!predicate(arr[i])) {
            rejectList.push(arr[i]);
        }
    }
    return rejectList

};

function greaterThan6(arg) {
    return arg > 6
}

console.log("\n-----#4:Reject-------")
console.log("Input-Original Array: "+ arr)
console.log("\nPredicate: Numbers greater than 6")
console.log("Output- Array of Numbers Rejected: "+reject(arr,greaterThan6));

// 5. Find First
var find1st = function(list, predicate) {
    for (var i = 0; i < list.length; i++) {
        if (predicate(list[i]) === true) {
            return list[i];
        }
    }
    return undefined;
}

//our test/filter
var firstEven = function(first) {
    return first % 2 === 0;
}

var arr1 = [1,3, 4, 5, 6, 7, 8, 9, 10];
var arr2= [3, 6, 7, 8, 10]
var arr3 = [1,5,7,10,13,12]

console.log("\n-----#5:Find1stInstance-------")
console.log("Input-Array1: "+arr1)
console.log("Input-Array2: "+arr2)
console.log("Input-Array3: "+arr3)

console.log("\nPredicate: Find First Even Number\n")
console.log("Rejected ArrayItems-1: "+find1st(arr1, firstEven));
console.log("Rejected ArrayItems-2: "+find1st(arr2, firstEven));
console.log("Rejected ArrayItems-3: "+find1st(arr3, firstEven));

//------------------------
// 6. Where function 
// **return objects that have a certain key-value pair
// ----------------------
var sub = [{
    title: "Cymbeline",
    author: "Shakespeare",
    year: 1611
}, {
    title: "The Tempest",
    author: "Shakespeare",
    year: 1611
},{
    title: "Romeo and Juliet",
    author: "Shakespeare",
    year: 1594
},{
    title: "Hamlet",
    author: "Shakespeare",
    year: 1600
}];

//1) As parameters - Pass array of pbjects, Query for Property, Query for Value
//2) Iterate over array
//3) Iterate over properties within objects (for prop in obj)
//4) Test to see if property exists within objects 
//      AND if that property's value matches the hasValue query
//5) If yes, push the whole object to a new array
//6) return the array after the loops have run

function where(arrayOfObj, propQry, hasVal) {
    var whereArray = []
    for(var i = 0; i < arrayOfObj.length; i++){
        for (var prop in arrayOfObj[i]){
            if(prop == propQry && arrayOfObj[i][prop] ==hasVal)
            {
                whereArray.push(arrayOfObj[i])
            }
        } 
    }
return whereArray
}

var propQ = 'year';
var yearQ = 1611;

console.log("\n-----#6:Where-------")
console.log("Input-Initial Array of Objects: ")
console.log(sub)
console.log("\nQuery="+propQ+":"+yearQ)
console.log("\nOutput-Returned Array of Objects:")

var subWhere = where(sub,propQ,yearQ)
console.log(subWhere)

