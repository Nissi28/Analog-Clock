const hourHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate(){
    const now =  new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60)* 360 + 90);
    console.log(secondDegrees)
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minute = now.getMinutes();
    const minsDegrees = ((minute / 60)* 360) +((seconds /60)* 6) + 90;
    console.log(minsDegrees)
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12 )* 360) +((minute / 60)* 30)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
setDate()