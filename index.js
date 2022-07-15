const daysHTML = document.querySelector(".days");
const hoursHTML = document.querySelector(".hours");
const minutesHTML = document.querySelector(".minutes");
const secondsHTML = document.querySelector(".seconds");

function count() {
  const currentDate = getCurrentDate()
  const targetDate = getTargetDate()
  const differenceDate = (targetDate - currentDate) / 1000;

  const minutes = 60;
  const hours = 60 * minutes;
  const days = 24 * hours;

  const diff = {
    days: Math.floor(differenceDate / days),
    hours: Math.floor((differenceDate % days) / hours),
    minutes: Math.floor((differenceDate % hours) / minutes),
    seconds: Math.floor(differenceDate % minutes),
  };

  expiredDate(currentDate, targetDate);
  displayDate(diff);
  // window.setTimeout(count(), 1000)
}

function getCurrentDate() {
  return Date.now()
}

function getTargetDate() {
  return new Date("july 30 2022 12:00:00")
}

function expiredDate(currentDate, targetDate) {
  if (currentDate > targetDate) {
    daysHTML.innerHTML = "0";
    hoursHTML.innerHTML = "0";
    minutesHTML.innerHTML = "0";
    secondsHTML.innerHTML = "0";
  }
}

function displayDate(diff) {
  daysHTML.innerHTML = diff.days < 10 ? "0" + diff.days : diff.days;
  hoursHTML.innerHTML = diff.hours < 10 ? "0" + diff.hours : diff.hours;
  minutesHTML.innerHTML = diff.minutes < 10 ? "0" + diff.minutes : diff.minutes;
  secondsHTML.innerHTML = diff.seconds < 10 ? "0" + diff.seconds : diff.seconds;
}

setInterval(() => {
  count();
}, 1000);

console.log(Date.now());
console.log(new Date);