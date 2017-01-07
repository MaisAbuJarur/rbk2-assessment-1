var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  var index = Math.random(* max)

  return {
    _storage: [],
    retrieve: function(key) {
      //retrieve bucket
    var bucket = []

    if(!bucket){
      return null
    }

    for(var i = 0; i <bucket.length; i++)
      var tuple = bucket[i]
      
      if(tuple[0] === key]){
        return tuple[i]
      }
    },

    insert: function(key, value) {
      var bucket= _storage(index)

      if(!bucket){
        bucket = []
        _storage.push(bucket)
      }
      var found = false
      //for collision
      for (var i = 0; i < _storage.length; i++) {
       var tuple = _storage[i]
       if (tuple[0] === key){
        tuple[1]=== value
        found = true
        continue;
       }
      }
      bucket.push([key,value])
  };
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};