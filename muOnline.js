function solve (input){
    let hp = 100;
    let loot = 0;

    let rooms = input.split('|');
    
    for(let i = 0; i < rooms.length; i++){
        let room = rooms[i].split(' ');
        let type = room[0];
        let num = Number(room[1]);

        if (type == 'potion'){
            if(hp + num > 100){
                num = 100 - hp;
            }
            hp += num;
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${hp} hp.`);
        } else if (type == 'chest'){
            loot += num;
            console.log(`You found ${num} bitcoins.`);
        } else {
            hp -= num;
            if (hp <= 0){
                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            } else {
                console.log(`You slayed ${type}.`);
            }
        }

    }
    console.log(`You\'ve made it!`);
    console.log(`Bitcoins: ${loot}`);
    console.log(`Health: ${hp}`);
}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");