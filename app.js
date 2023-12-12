const day = document.querySelector(".day");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minut");
const second = document.querySelector(".second");

let [seconds, minutes, hours, days] = [0, 0, 0, 0];

function getTime() {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1, 0, 0, 0);
    let different = newYear - today;
    seconds = Math.floor((different / 1000) % 60);
    minutes = Math.floor((different / 1000 / 60) % 60);
    hours = Math.floor((different / (1000 * 60 * 60)) % 24);
    days = Math.floor(different / (1000 * 60 * 60 * 24));
}

function getData() {
    second.innerHTML = seconds;
    minute.innerHTML = minutes;
    hour.innerHTML = hours;
    day.innerHTML = days;
}

let interval = setInterval(() => {
    getTime();
    getData();
}, 1000);

iconCrete();
setInterval(iconCrete, 200);

function iconCrete() {
  const icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("fa-snowflake");

  icon.style.left = Math.random() * window.innerWidth + "px";
  icon.style.animationDuration = Math.random() * 3 + 2 + "second";
  icon.style.opacity = Math.random();
  icon.style.fontSize = Math.random * 1 + "rem";
  document.body.append(icon);

  setTimeout(() => {
    icon.remove();
  }, 3500);
}

