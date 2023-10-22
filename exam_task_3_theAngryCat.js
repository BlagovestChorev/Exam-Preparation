function theAngryCat(priceRatings, entryPoint, itemCategory) {
    let leftDamage = 0;
    let rightDamage = 0;
  
    for (let i = 0; i < entryPoint; i++) {
      if (
        (itemCategory == 'cheap' && priceRatings[i] < priceRatings[entryPoint]) ||
        (itemCategory == 'expensive' && priceRatings[i] >= priceRatings[entryPoint])
      ) {
        leftDamage += priceRatings[i];
      }
    }
  
    for (let i = entryPoint + 1; i < priceRatings.length; i++) {
      if (
        (itemCategory == 'cheap' && priceRatings[i] < priceRatings[entryPoint]) ||
        (itemCategory == 'expensive' && priceRatings[i] >= priceRatings[entryPoint])
      ) {
        rightDamage += priceRatings[i];
      }
    }
  
    if (leftDamage >= rightDamage) {
      console.log(`Left - ${leftDamage}`);
    } else {
      console.log(`Right - ${rightDamage}`);
    }
  }
  
  // Example inputs and expected outputs
  theAngryCat([1, 5, 1], 1, 'cheap'); // Expected Output: Left - 1
  theAngryCat([5, 10, 12, 5, 4, 20], 3, 'cheap'); // Expected Output: Right - 4
  theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, 'expensive'); // Expected Output: Left - 20