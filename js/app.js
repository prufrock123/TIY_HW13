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



function reduce(array, hollaback){ // she ain't not hollaback girl.
	"use strict";
	var prev = null;
	if (array.length === 1){
		return 
	}

}

function filter(array hollaback){

}