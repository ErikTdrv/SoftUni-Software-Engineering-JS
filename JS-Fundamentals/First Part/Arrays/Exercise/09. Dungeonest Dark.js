function dungeonestDark(arr){
let rooms = arr[0].split('|')
let health = 100
let coins = 0
let isFinished = true;

for (let i = 0; i < rooms.length; i++){
    let room = rooms[i].split(' ')
    if (room[0] == 'potion'){
        if (Number(room[1]) + health >= 100){
            console.log(`You healed for ${100 - health} hp.`);
            health = 100
            console.log(`Current health: ${health} hp.`);
        }else if (Number(room[1]) + health <= 99){
            health += Number(room[1])
            console.log(`You healed for ${room[1]} hp.`);
            console.log(`Current health: ${health} hp.`);
        }
    }else if (room[0] == 'chest'){
        console.log(`You found ${room[1]} coins.`);
        coins += Number(room[1])
    }else {
        
        if (health - Number(room[1]) > 0){
            health -= Number(room[1])
            console.log(`You slayed ${room[0]}.`);

        }else {
            console.log(`You died! Killed by ${room[0]}.`);
            isFinished = false;
            console.log(`Best room: ${i + 1}`);
            break;
        }
    }
}
if (isFinished){
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])