// 1. Custom forEach function
function customForEach(array, callback) {
        "use strict";
        for (var i = 0; i < array.length; i++) {
            callback(array[i], i, array);
        }
    }
    //PUSH?PULL TEST SHAWN

// 2. Map, reduce and filter functions
function customMap(array, callback) {
    "use strict";
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

function customReduce(array, hollaback, initialVal) { // she ain't not hollaback girl.
    "use strict";

    var prev = initialVal;

    if (initialVal) {
        array.unshift(initialVal);
    };

    customForEach(array, function(element, index, array) {
        if (index === 0) {
        	prev = element;
            return;
        } else {
            prev = hollaback(prev, element, index, array);
        }
    });
    return prev;
}

function customFilter(array, callback) {
	"use strict"
	var emptyArray = [];
	customForEach(array, function(element, index, array){
		if (callback(element, index, array)){
			emptyArray.push(element);
		};
	});
	return emptyArray;
}

// 3. customPluck function
function customPluck(array, property){
	"use strict";
	var emptyArray = [];
	customForEach(array, function(element, i, array){
		emptyArray.push(element[property]);
	});
	return emptyArray;
}

// 4. customReject function
function customReject(array, callback){
	"use strict";
	var emptyArray = [];
	customForEach(array, function(element, i, array){
		if (callback(element, i, array)){
			return;
		} else {
			emptyArray.push(element);
		}
	});
	return emptyArray;
}

// 5. customFind function
function customFind(array, callback){
	"use strict";
	var result;
	customForEach(array, function(e, i, array){
		if ( result === undefined && callback(e, i, array) ){
			result = e;
		}
	});
	return result;
}

// 6. customWhere function
function where(array, properties){
	"use strict";
	var emptyArray = [];
	customForEach(array, function(e, i, array){
		properties
	});
}

// Julie's Work
// 
var students = [{
	    firstname: "Julie",
	    lastname: "Rich",
	    age: 36,
	    gender: "female"
	}, {
	    firstname: "Matt",
	    lastname: "Keas",
	    age: 26,
	    gender: "male"
	}, {
	    firstname: "Ken",
	    lastname: "McLeod",
	    age: 40,
	    gender: "male"
	}, {
	    firstname: "Melissa",
	    lastname: "Swink",
	    age: 21,
	    gender: "female"
	}, {
	    firstname: "Tawfiq",
	    lastname: "Momin",
	    age: 32,
	    gender: "male"
	}, {
	    firstname: "Landon",
	    lastname: "Rich",
	    age: 9,
	    gender: "male"
	}, {
	    firstname: "Shawn",
	    lastname: "Miller",
	    age: 33,
	    gender: "male"
}];

function forEach(list, callback) {
    for (var i = 0, len = list.length; i < len; i++) {
        callback(list[i], i, list);
    }
}

function filter(list, callback) {
    var passed = [];
    forEach(list, function(val, i, arr) {
        if (callback(val, i, arr)) {
            passed.push(val);
        }
    });
    return passed;
}
console.log(filter(students, function(person) {
    return person.age < 20;
}));

function map(list, callback) {
    var mapped = [];
    forEach(list, function(val, i, arr) {
        mapped.push(callback(val, i, arr));
    });
    return mapped;
}
var sub = students.filter(function(person) {
    return person.gender - person.age > 20;
});
console.log(map(sub, function(person) {
    return person.firstname;
}));


// 2.5
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
    return a + b;
}, 0));
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
