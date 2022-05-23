function timeToWalk(steps, footprint, speed){
    let distanceMeters = steps * footprint;
    let speedMeterSec = speed / 3.6;
    let time = distanceMeters / speedMeterSec;
    let rest = Math.floor(distanceMeters/500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timieHr = Math.floor(time / 3600);

    console.log((timieHr < 10 ? '0' : '') + timieHr + ':' + (timeMin * rest < 10 ? "0" : '') + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec)




}
timeToWalk(4000, 0.6, 5)