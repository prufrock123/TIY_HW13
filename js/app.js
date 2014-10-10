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