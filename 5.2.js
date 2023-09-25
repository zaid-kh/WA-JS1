function repeatStr(count, str) {
  let result = "";
  while (count > 0) {
    result += str;
    count--;
  }
  return result;
}
console.log(repeatStr(5, "Hello"));
