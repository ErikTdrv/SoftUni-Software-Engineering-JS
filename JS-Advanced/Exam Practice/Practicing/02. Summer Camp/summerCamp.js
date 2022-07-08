class SummerCamp{
    organizer;
    location;
    priceForTheCamp;
    listOfParticipants;

    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            'child': 150,
            'student': 300,
            'collegian': 500,
        }
        this.listOfParticipants = []
        this.partLength = 0;
    }

    registerParticipant(name, condition, money){
        let current = this.listOfParticipants.find(x => x.name == name)
        let participant = {}
        if (!this.priceForTheCamp.hasOwnProperty(condition)){
            throw new Error('Unsuccessful registration at the camp.')
        }
        // console.log(this.priceForTheCamp[condition])
        if (money < Number(this.priceForTheCamp[condition])){
            return `The money is not enough to pay the stay at the camp.`
        }
        if (current){
            return `The ${name} is already registered at the camp.`
        }else {
            participant = {
                'name': name, 
                condition, 
                power: 100,
                wins: 0
            }
            this.listOfParticipants.push(participant);
            this.partLength++
            return `The ${name} was successfully registered.`
        }

    }

    unregisterParticipant(name){
        let current = this.listOfParticipants.find(x => x.name == name)
        if(!current){
            throw new Error(`The ${name} is not registered in the camp.`)
        }else {
            let indexOfCurr = this.listOfParticipants.indexOf(current)
            this.listOfParticipants.splice(indexOfCurr, 1)
            return `The ${name} removed successfully.`
        }
    }
    
    timeToPlay(typeOfGame, participant1, participant2){
        let currentP1 = this.listOfParticipants.find(x => x['name'] == participant1)
        let currentP2 = this.listOfParticipants.find(x => x['name'] == participant2)
        if (typeOfGame == 'WaterBalloonFights'){
            if (!currentP1 || !currentP2){
                throw new Error(`Invalid entered name/s.`)
            }else if (currentP1.condition != currentP2.condition){
                throw new Error(`Choose players with equal condition.`)
            }
            if (currentP1.power > currentP2.power){
                currentP1.wins++
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            }else if (currentP2.power > currentP1.power){
                currentP2.wins++
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }else {
                return `There is no winner.`
            }
        }else{
            if (!currentP1){
                throw new Error(`Invalid entered name/s.`)
            }
            currentP1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString(){
        let resultArr = [`${this.organizer} will take ${this.partLength} participants on camping to ${this.location}`]
        this.listOfParticipants.sort((b, a) => a.wins - b.wins)
        console.log(this.listOfParticipants)
        for (let el of this.listOfParticipants){
            let string = `${el.name} - ${el.condition} - ${el.power} - ${el.wins}`
            resultArr.push(string)
        }
        return resultArr.join('\n')
    }
}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
