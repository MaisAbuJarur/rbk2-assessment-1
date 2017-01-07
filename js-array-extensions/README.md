## Instantiation Patterns
* [ ] Extend the native `Array` class to have these useful functions:
  * `.first` - Returns the first element of the array
  * `.last` - Returns the last element of the array

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
