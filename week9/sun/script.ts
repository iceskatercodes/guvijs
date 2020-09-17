"use strict";

// function for slicing
var newSlice = function newSlice(array, begin, end) {
  var tempArray = [];
  if (end === undefined || end > array.length) end = array.length;

  for (var i = begin; i < end; i++) {
    tempArray.push(array[i]);
  }

  return tempArray;
}; // function for chunk


var chunk = function chunk(arr, len) {
  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(newSlice(arr, i, i += len));
  }

  return chunks;
};

var ar = [10, 20, 30, 40, 50, 70, 80];
var chunkResult = chunk(ar, 3);
console.log("Result of Chunk method: ", chunkResult); //Returns array length

var arrLength = function arrLength(ar) {
  var length = 0;

  while (ar[length] !== undefined) {
    length++;
  }

  return length;
}; //function to calculate sum of an array


var sum = function sum(arr) {
  var sum = 0;
  var len = arrLength(arr);

  for (var i = 0; i < len; i++) {
    sum += arr[i];
  }

  return sum;
};

console.log("Result of Sum method: ", sum([1, 2, 3, 7, 9])); // ----------------- Filter Method -------------------

var users1 = [{
  'user': 'Lol',
  'age': 16,
  'active': true
}, {
  'user': 'LO!',
  'age': 40,
  'active': false
}, {
  'user': 'LOL!',
  'age': 2,
  'active': false
}, {
  'user': 'LOL@',
  'age': 21,
  'active': true
}, {
  'user': 'LOL@A',
  'age': 20,
  'active': true
}, {
  'user': 'LOL#',
  'age': 30,
  'active': true
}];

var filter = function filter(arr, invokedFunc) {
  var filterArr = [];

  for (var i = 0; i < arr.length; i++) {
    var result = invokedFunc(arr[i], i, arr);
    if (result) filterArr.push(arr[i]);
  }

  return filterArr;
};

var resultFilter = filter(users1, function (e) {
  return e.age > 20;
});
console.log("Result of Filter method: ", resultFilter); // ------------------reduce method------------------------

var reduce = function reduce(arr, reducerFun, initialVal) {
  var accumulator = initialVal === undefined ? 0 : initialVal;

  for (var i = 0; i < arr.length; i++) {
    accumulator = reducerFun(accumulator, arr[i], i, arr);
  }

  return accumulator;
};

var resultReduce = reduce([1, 2, 5, 7], function (sum, n) {
  return sum + n;
}, 0);
console.log("Result of Reduce method: ", resultReduce); // -------------------Find method-----------------------

var users2 = [{
  'user': 'barney',
  'age': 36,
  'active': true
}, {
  'user': 'fred',
  'age': 40,
  'active': false
}, {
  'user': 'pebbles',
  'age': 1,
  'active': true
}];

var find = function find(arr, invokedFunc) {
  var foundItem;

  for (var i = 0; i < arr.length; i++) {
    var result = invokedFunc(arr[i], i, arr);

    if (result) {
      foundItem = arr[i];
    }
  }

  return foundItem;
};

var resultFind = find(users2, function (e) {
  return e.age == 1;
});
console.log("Result of Find method: ", resultFind);