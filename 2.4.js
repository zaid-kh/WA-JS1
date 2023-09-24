function findUnique(array) {
  const first = array[0];
  const second = array[1];
  const last = array[array.length - 1];

  // odd is 2nd
  if (first === last && first !== second) {
    return second;
  } // odd is last
  else if (first === second && first !== last) {
    return last;
  } // odd is first
  else if (last === second && first !== last) {
    return first;
  } else {
    for (const element of array) {
      if (element !== first) {
        return element;
      }
    }
  }

  return "No unique element found";
}
console.log(findUnique([1, 1, 1, 1, 1]));
console.log(findUnique([2, 1, 1, 1, 1]));
console.log(findUnique([1, 3, 1, 1, 1]));
console.log(findUnique([1, 1, 1, 4, 1]));
console.log(findUnique([1, 1, 1, 1, 5]));
