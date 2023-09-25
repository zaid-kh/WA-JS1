function abbreviate(fullName) {
  let firstName = fullName.split(" ")[0].charAt(0).toUpperCase();
  let lastName = fullName.split(" ")[1].charAt(0).toUpperCase();
  return `${firstName}.${lastName}`;
}

console.log(`zaid khamis abbreviated is ${abbreviate("zaid khamis")}`);
