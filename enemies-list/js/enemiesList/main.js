// Put your code here

const getEnemies = [
  {
    firstName: "Joshua",
    lastName: "Flowers",
    Offenses:
    {
      offense1: "Being a jerk to me in elementary school",
      offense2: "Not being nice to me in elementary school",
    },
    isReallyHated: true
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    Offenses: {
      offense1: "Cut off Luke's hand",
      offense2: "Murdered all those kids",
      offense3: "Unkind management practices"
    },
    isReallyHated: false
  },
  {
    firstName: "Betty",
    LastName: "Rudelady",
    Offenses: {
      offense1: "Phone calls in the theater",
      offense2: "Phone calls on the bus",
      offense3: "Phone calls in line at the grocery store",
      offense4: "Poor conversationalist"
    },
    isReallyHated: true
  },
  {
    firstName: "Leon",
    lastName: "Peck",
    Offenses: {
      offense1: "Keeps giving me a hotplate"
    },
    isReallyHated: false
  }
]

const enemies = [ ...getEnemies ];

console.log("My Enemies List!");
console.log("_________________");

for (myEnemy of enemies) {
  if (myEnemy.isReallyHated) {
    console.log(`${ myEnemy.firstName } ${ myEnemy.lastName } (Really, really dislike!)`)
  }
  else {
    console.log(`${ myEnemy.firstName } ${ myEnemy.lastName }`)
  }
}