// Put your code here
const names = [ "Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China" ];

console.log("All Place Names");

for (eachName of names) {
  console.log(eachName);
}

console.log("");
console.log("'The' Place Names");

for (eachName of names) {
  if (eachName.startsWith('The')) {
    console.log(eachName)
  }
}