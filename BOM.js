//?-query parameter

const hewleh = () => {
    console.log("hello");
};

let counter = 0;
let timerId = 0;
let check = true;

// setTimeout(hewleh, 5000);

// setInterval(hewleh, 5000);

const countDisplay = document.getElementById("count");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");

const countStart = () => {
    console.log("Start");
if(check){
    timerId = setInterval(() => {
        counter++; display();
    }, 1000);
}
check = false;
};

const countStop = () => {
    console.log("Stop");
    clearInterval(timerId);
    check = true;
};

const display = () => {
    countDisplay.innerText = counter;
}

display();

btnStart.addEventListener("click", countStart);

btnStop.addEventListener("click", countStop);