// 1.

function customForEach(array, callback) {
    "use strict";
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}


// 2. 

function customMap(array, callback) {
    "use strict";
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}
// 3.
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

function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;

}

function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}

var pluck = stooges.filter(function(sto) {
    return sto.name;
});

console.log(map(pluck, function(sto) {
    return sto.name;
}));


//4.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd = [];

function reject() {
    for (var i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 !== 0) {
            odd.push(arr[i]);
            arr.splice(i, 1);
        }
    }

};

reject();
console.log(odd);

// 5.
var findE = function(list, predicate) {
    for (var i = 0; i < list.length; i++) {
        if (predicate(list[i]) === true) {
            return list[i];
        }
    }
    return undefined;
}

var predicate = function(first) {
    return first % 2 == 0;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findE(arr, predicate));
// 6.
var sub = [{
    title: "Cymbeline",
    author: "Shakespeare",
    year: 1611
}, {
    title: "The Tempest",
    author: "Shakespeare",
    year: 1611
}];

function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;

}
console.log(filter(sub, function(play) {
    return sub.filter;
}));

function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}

var where = sub.filter(function(play) {
    return play.title;
});

console.log(map(where, function(play) {
    return play.year;
}));
