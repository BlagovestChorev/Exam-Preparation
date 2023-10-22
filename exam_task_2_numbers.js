function manipulateNumbers(input) {
    let numbers = input.shift().split(' ').map(Number);
  
    for (const line of input) {
      let [command, num1, num2] = line.split(' ');
  
      switch (command) {
        case 'Add':
          numbers.push(Number(num1));
          break;
        case 'Remove':
          let index = numbers.indexOf(Number(num1));
          if (index !== -1) {
            numbers.splice(index, 1);
          }
          break;
        case 'Replace':
          let replaceIndex = numbers.indexOf(Number(num1));
          if (replaceIndex !== -1) {
            numbers[replaceIndex] = Number(num2);
          }
          break;
        case 'Collapse':
          numbers = numbers.filter((num) => num >= Number(num1));
          break;
        case 'Finish':
          console.log(numbers.join(' '));
          break;
      }
    }
  }
  manipulateNumbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
  manipulateNumbers(["1 20 -1 10", "Collapse 8", "Finish"]) ;
  manipulateNumbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
 