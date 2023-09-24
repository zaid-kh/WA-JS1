function summation(num) {
  let sum = 0;
  while (num > 0) {
    sum += num;
    num--;
  }
  return sum;
}

console.log(`Sum of 2 is : ${summation(2)}`);
console.log(`Sum of 5 is : ${summation(5)}`);
console.log(`Sum of 8 is : ${summation(8)}`);
