function toCamelCase(str) {
  // split by dash / underscore
  const words = str.split(/[-_]/);
  // make first letter lower case
  let result = words[0].charAt(0).toLowerCase() + words[0].slice(1);
  // concatenate words and capitalize 1st letter of each word
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }
  return result;
}
let str = "Helloo_world-babyy";
console.log(toCamelCase(str));
