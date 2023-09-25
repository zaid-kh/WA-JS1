function maskify(text) {
  let mask = text.slice(0, -4);
  let visible = text.slice(-4);
  let maskedArray = Array.from(mask).fill("#");
  return maskedArray.join("") + visible;
}

console.log(maskify("4556364607935616"));
console.log(maskify("nanananannananabatman"));
