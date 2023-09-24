function sumOfLowestTwo(params) {
  // sort array (ascending)
  params.sort((a, b) => a - b); // explanation ref: https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677
  // sum of arr[0] + arr[1]
  return params[0] + params[1];
}

const x = [1423, 134, 4356, 688678, 9879789];

console.log(sumOfLowestTwo(x));
