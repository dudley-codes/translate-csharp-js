console.log("Let's roll some dice, baby!");
console.log("___________________________");

const roll = () => {
  dieValue = Math.floor(Math.random() * 6 + 1);
  return dieValue
}

const die = () => {
  let dieString = "";
  switch (roll()) {
    case 1:
      dieString = "1"
      break;
    case 2:
      dieString = "2"
      break;
    case 3:
      dieString = "3"
      break;
    case 4:
      dieString = "4"
      break;
    case 5:
      dieString = "5"
      break;
    case 6:
      dieString = "6"
      break;
  }
  return dieString
}

for (i = 0; i < 10; i++) {
  let die1 = die();
  let die2 = die();

  let message = `${ die1 } + ${ die2 } == ${ parseInt(die1) + parseInt(die2) }`
  if (parseInt(die1) === parseInt(die2)) {
    message += " DOUBLES!"
  }

  console.log(message)
}