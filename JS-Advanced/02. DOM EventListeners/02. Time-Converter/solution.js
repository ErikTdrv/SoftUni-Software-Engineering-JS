function attachEventsListeners() {

    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');
    let daysBtnElement = document.getElementById('daysBtn');
    let hoursBtnElement = document.getElementById('hoursBtn');
    let minutesBtnElement = document.getElementById('minutesBtn');
    let secondsBtnElement = document.getElementById('secondsBtn');

    daysBtnElement.addEventListener('click', e => {
        let days = daysElement.value 
        hoursElement.value = days*24;
        minutesElement.value = hoursElement.value * 60;
        secondsElement.value = minutesElement.value * 60;
    })
    hoursBtnElement.addEventListener('click', e => {
        let hours = hoursElement.value 
        daysElement.value = hours/24;
        minutesElement.value = hours * 60;
        secondsElement.value = minutesElement.value * 60;
    })
    minutesBtnElement.addEventListener('click', e => {
        let minutes = minutesElement.value;
        hoursElement.value = minutes / 60;
        daysElement.value = hoursElement.value / 24;
        secondsElement.value = minutes*60
    })
    secondsBtnElement.addEventListener('click', e => {
        let seconds = secondsElement.value;
        minutesElement.value = seconds / 60;
        hoursElement.value = minutesElement.value / 60;
        daysElement.value = hoursElement.value / 24
    })
}