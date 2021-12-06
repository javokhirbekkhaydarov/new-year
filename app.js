const day = document.querySelector(".day")
const hour = document.querySelector(".hours")
const minut = document.querySelector(".minut")
const second = document.querySelector(".second")
 const date = new Date("Jan 1, 2022 00:00:00").getTime()

function countdown() {
    const newYearDate = new Date(date);
    const currentDate = new Date();
    
    const centeralTime = (newYearDate - currentDate) / 1000;
    
   //  const seconds = 1000;
//   const minut = second * 60;
//   const hours = minut * 60;
//   const day = hours * 24;
    
    const days = Math.floor(centeralTime / 3600 / 24);
    const hours = Math.floor(centeralTime / 3600) % 24;
    const mins = Math.floor(centeralTime / 60) % 60;
    const seconds = Math.floor(centeralTime) % 60;
    
    day.innerHTML = days;
    hour.innerHTML = formatTime(hours);
    minut.innerHTML = formatTime(mins);
    second.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();
setInterval(countdown, 1000)
