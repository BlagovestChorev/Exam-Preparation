
function pirateShipBattle(input) {
  // Parse input
  let pirateShipStatus = input.shift().split('>').map(Number);
  let warshipStatus = input.shift().split('>').map(Number);
  let maxHealth = Number(input.shift());

  // Define functions to check ship conditions
  function isSectionValid(ship, index) {
    return index >= 0 && index < ship.length;
  }

  function isStalemate() {
    let pirateSum = pirateShipStatus.reduce((a, b) => a + b);
    let warshipSum = warshipStatus.reduce((a, b) => a + b);
    console.log(`Pirate ship status: ${pirateSum}`);
    console.log(`Warship status: ${warshipSum}`);
  }

  // Process commands
  while (input.length > 0) {
    let command = input.shift().split(' ');

    if (command[0] === 'Retire') {
      break;
    }

    if (command[0] === 'Fire') {
      let index = Number(command[1]);
      let damage = Number(command[2]);
      if (isSectionValid(warshipStatus, index)) {
        warshipStatus[index] -= damage;
        if (warshipStatus[index] <= 0) {
          console.log('You won! The enemy ship has sunken.');
          return;
        }
      }
    } else if (command[0] === 'Defend') {
      let startIndex = Number(command[1]);
      let endIndex = Number(command[2]);
      let damage = Number(command[3]);
      if (isSectionValid(pirateShipStatus, startIndex) && isSectionValid(pirateShipStatus, endIndex)) {
        for (let i = startIndex; i <= endIndex; i++) {
          pirateShipStatus[i] -= damage;
          if (pirateShipStatus[i] <= 0) {
            console.log('You lost! The pirate ship has sunken.');
            return;
          }
        }
      }
    } else if (command[0] === 'Repair') {
      let index = Number(command[1]);
      let health = Number(command[2]);
      if (isSectionValid(pirateShipStatus, index)) {
        pirateShipStatus[index] += health;
        if (pirateShipStatus[index] > maxHealth) {
          pirateShipStatus[index] = maxHealth;
        }
      }
    } else if (command[0] === 'Status') {
      let count = pirateShipStatus.filter((section) => section < maxHealth * 0.2).length;
      console.log(`${count} sections need repair.`);
    }
  }

  // If no ship has sunk, it's a stalemate
  isStalemate();
}

// Input
const input = [
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire"
];

// Call the function
pirateShipBattle(input);