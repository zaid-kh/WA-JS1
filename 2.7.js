function basicOp(operation, n1, n2) {
  switch (operation) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    case "%":
      return n1 % n2;
    default:
      return `Invalid Operation: ${operation}`;
  }
}
console.log(basicOp("+", 4, 7)); // Output: 11
console.log(basicOp("-", 15, 18)); // Output: -3
console.log(basicOp("*", 5, 5)); // Output: 25
console.log(basicOp("/", 49, 7)); // Output: 7
console.log(basicOp("%", 49, 7)); // Output: 0
console.log(basicOp("%", 55, 7)); // Output: 6
