function computerStore (arr ){
    let priceBeforTax = 0;
    let command = arr.shift();

    while (command != 'special' && command != 'regular'){
        let price = Number(command);
        if(price <= 0){
            console.log('Invalid price!');
            command = arr.shift();
            continue;
        }

        priceBeforTax += price; 

        command = arr.shift();  
    }
    if (priceBeforTax == 0){
        console.log('Invalid order!');
    } else {
        let tax = 0.20 * priceBeforTax;
        let priceWithTax = priceBeforTax + tax;

        if (command == 'special'){
            priceWithTax *= 0.9;
        }
        console.log(`Congratulations you\'ve just bought a new computer!`);
        console.log(`Price without taxes: ${priceBeforTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
    }
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special'])