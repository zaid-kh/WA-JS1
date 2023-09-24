function centuryFromYear(year) {
  let century = year / 100;
  // from 1-99
  if (!Number.isInteger(century)) century += 1;
  return Math.floor(century);
}
console.log(`Century of 1705 is : ${centuryFromYear(1705)}`);
console.log(`Century of 1900 is : ${centuryFromYear(1900)}`);
console.log(`Century of 1601 is : ${centuryFromYear(1601)}`);
console.log(`Century of 2000 is : ${centuryFromYear(2000)}`);
