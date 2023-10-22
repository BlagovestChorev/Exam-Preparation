function cookingMasterclass([budget, students, flourPrice, eggPrice, apronPrice]) {
    let totalFlourCost = (students - Math.floor(students / 5)) * flourPrice;
    let totalEggCost = students * 10 * eggPrice;
    let totalApronCost = Math.ceil(students * 1.2) * apronPrice;
    let totalCost = totalFlourCost + totalEggCost + totalApronCost;

    if (budget >= totalCost) {
        console.log(`Items purchased for ${totalCost.toFixed(2)}$.`);
    } else {
        let neededMoney = (totalCost - budget).toFixed(2);
        console.log(`${neededMoney}$ more needed.`);
    }
}
  cookingMasterclass([50, 2, 1.0, 0.10, 10.0]);
  //cookingMasterclass([100, 25, 4.0, 1.0, 6.0]);
  //cookingMasterclass([946, 20, 12.05, 0.42, 27.89]);