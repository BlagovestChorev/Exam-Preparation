function treasureHunt(input) {
    // Parse the initial treasure chest
    let initialTreasureChest = input.shift().split('|');
  
    // Define an array to store the treasure items
    let treasureItems = [...initialTreasureChest];
  
    // Define a function to check if an item exists in the treasure
    function itemExists(item) {
      return treasureItems.includes(item);
    }
  
    // Process commands
    while (input[0] !== 'Yohoho!') {
      let command = input.shift().split(' ');
  
      if (command[0] === 'Loot') {
        let items = command.slice(1);
        for (let item of items) {
          if (!itemExists(item)) {
            treasureItems.unshift(item);
          }
        }
      } else if (command[0] === 'Drop') {
        let index = Number(command[1]);
        if (index >= 0 && index < treasureItems.length) {
          let removedItem = treasureItems.splice(index, 1)[0];
          treasureItems.push(removedItem);
        }
      } else if (command[0] === 'Steal') {
        let count = Number(command[1]);
        let stolenItems = treasureItems.splice(-count);
        console.log(stolenItems.join(', '));
      }
    }
  
    if (treasureItems.length === 0) {
      console.log('Failed treasure hunt.');
    } else {
      let totalLength = treasureItems.join('').length;
      let averageGain = (totalLength / treasureItems.length).toFixed(2);
      console.log(`Average treasure gain: ${averageGain} pirate credits.`);
    }
  }
  
  // Input
  const input = [
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
  ];
  
  // Call the function
  treasureHunt(input);