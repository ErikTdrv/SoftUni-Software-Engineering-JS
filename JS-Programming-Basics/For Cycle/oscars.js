function oscars (input){
   let index = 0;
   let actorName = input[index];
   index++
   let points = Number(input[index]);
   index++
   let judges = Number(input[index]);
   index++
   let isNominated = false;


   for(let i = 0; i < judges; i++){
       let name = input[index];
       index++
       let tempPoints = Number(input[index]);
       index++

       points += name.length * tempPoints/2;
       if (points > 1250.5){
           console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`)
           isNominated = true;
           break;
       }
   }
   if (!isNominated){
       let diff = 1250.5 - points
       console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`)
   }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
