function fibonacciElement(n) {
  if (n === 0) {
    return 0;
  }
  let count = 1;
  let n1 = 0,
    n2 = 1;
  let sum = 1;
  while (count != n) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    count++;
  }
  return sum;
}
for (let i = 0; i < 20; i++) {
  console.log(fibonacciElement(i));
}
