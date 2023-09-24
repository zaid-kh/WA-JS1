function findNextSquare(num) {
  const sqrt = Math.sqrt(num);
  // if square is not integer return -1
  if (!Number.isInteger(sqrt)) return -1;
  // get next root then square it
  nextRoot = sqrt + 1;
  return nextRoot * nextRoot;
}

console.log(findNextSquare(124));
console.log(findNextSquare(144));
