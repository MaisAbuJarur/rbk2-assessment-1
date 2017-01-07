var Stack = function() {
	//your code is here
	this._storage = [];


Stack.prototype.add = function (value){
	this._storage.push(value)
}

Stack.prototype.remove = function () {
	var value = this._storage[this._storage.length-1]
	this._storage.pop()
	return value;
}

};