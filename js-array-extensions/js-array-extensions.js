var Array = function (arr){
	var array = {};
	array.storage = arr;


array.first = function() {
	return array.storage[0]

}

array.last = function() {
	return array.storage[array.storage.length-1]
}



return array;

}
