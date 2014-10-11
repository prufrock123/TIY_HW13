// 1.

function customForEach(array, callback){
	"use strict";
	for (var i = 0; i < array.length; i++){
		callback(array[i], i, array);
	}
}


// 2. 

function customMap(array, callback){
	"use strict";
	var newArray = [];
	for (var i = 0; i < array.length; i++){
		newArray.push(callback(array[i], i, array));
	}
	return newArray;
}





























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