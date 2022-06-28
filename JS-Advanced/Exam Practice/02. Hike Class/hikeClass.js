class SmartHike{
    username;
    goals;
    listOfHikes;
    resources;
    constructor(username){
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100
    }
    
    addGoal(peak, altitude){
        if (this.goals.hasOwnProperty(peak)){
            return `${peak} has already been added to your goals`
        }else {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`
        }
    }

    hike (peak, time, difficultyLevel){
        if (!this.goals.hasOwnProperty(peak)){
            throw new Error(`${peak} is not in your current goals`)
        }else if(this.goals.hasOwnProperty(peak) && this.resources < 1){
            throw new Error("You don't have enough resources to start the hike")
        }
        let diff = Number(this.resources) - Number(time*10)
        if (diff < 0){
            return "You don't have enough resources to complete the hike"
        }else{
            this.resources = diff
            let hike = {
                peak,
                time, 
                difficultyLevel
            }
            this.listOfHikes.push(hike)
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }

    rest(time){
        this.resources += time*10;
        if (this.resources >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }else {
            return `You have rested for ${time} hours and gained ${time*10}% resources`
        }
    }

    showRecord(criteria){
        if (this.listOfHikes.length == 0){
            return `${this.username} has not done any hiking yet`
        }
        let arr = []

        if (criteria == 'easy' || criteria == 'hard'){
            for (let char of this.listOfHikes){
                if(char.difficultyLevel == criteria){
                    arr.push(char)
                }
            }
            if (arr.length == 0){
                return `${this.username} has not done any ${criteria} hiking yet`
            }else {
                arr.sort((a,b) => a.time - b.time)
                let theresult = `${this.username}'s best ${criteria} hike is ${arr[0].peak}, for ${arr[0].time} hours`
                return theresult
            }

        }else if (criteria == 'all'){
            arr.push('All hiking records:')
            for (let charEl of this.listOfHikes){
                let theresult = `${this.username} hiked ${charEl.peak} for ${charEl.time} hours`
                arr.push(theresult)
            }
            return arr.join('\n')
        }
    }
}
const user = new SmartHike('Vili');
console.log(user.showRecord('all'));
