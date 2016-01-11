
var Q = require('q');

var Math = function() {

}

Math.prototype.add = function(num1, num2) {
  var deferred = Q.defer();

  var sum = num1 + num2;

  deferred.resolve(sum);

  return deferred.promise;
}

module.exports = Math;
