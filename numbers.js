function findTop5AboveAverage(numbers) {
    // Split the input into an array of integers
    const integerArray = numbers.split(' ').map(Number);
  
    // Calculate the average value
    const average = integerArray.reduce((acc, current) => acc + current, 0) / integerArray.length;
  
    // Filter numbers greater than the average
    const aboveAverage = integerArray.filter(number => number > average);
  
    // Sort in descending order
    aboveAverage.sort((a, b) => b - a);
  
    // Print the top 5 (or fewer) numbers
    const top5 = aboveAverage.slice(0, 5);
    
    if (top5.length > 0) {
      console.log(top5.join(' '));
    } else {
      console.log('No');
    }
  }
  
  // Input
  const input = '10 20 30 40 50';
  
  // Call the function
  findTop5AboveAverage(input);