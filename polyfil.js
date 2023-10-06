// polyfill : functions that are backward compatibility

// polyfill for map
// polyfill for filter
// polyfill for reduce

//working of map
const are = [1, 2, 3, 4, 5];
const result = are.map((value) => value);
result;

//polyfill for map
function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i]);
    result.push(res);
  }
  return result;
}

console.log(map([1, 2, 3, 4, 5], (val) => val * 2));

// filter
const result2 = are.filter((value) => value >= 3);
result2;

//polyfill for filter
function filter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = callback(arr[i]);
    if (element) {
      result.push(arr[i]);
    }
  }
  return result;
}

const result3 = filter([1, 2, 3, 4, 5], (value) => value >= 3);
result3;

// foreach use
const are3 = [1, 2, 3, 4, 5];
are3.forEach((value) => {
  console.log(value);
});

// polyfill for foreach
function forEach(arr, callback) {}

// reduce use
const are4 = [1, 2, 3, 4, 5];
const result4 = are4.reduce((a, b) => a + b, 0);
result4;

// polyfill for reduce
function Reduce(arr, callback, acc) {
  for (let i = 0; i < arr.length; i++) {
    acc = acc + arr[i];
  }
  return acc;
}
