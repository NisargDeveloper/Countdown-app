//Let's now build the Timer counter
//Steps 1 Set the date we wanna reach... I will say 28 Feb 2022
let getCountDownDate = new Date("April  18, 2022");

function getData() {
let getTodayDate = new Date();
let difference = getCountDownDate - getTodayDate;

//Days
let getDay = Math.floor(difference/(24*60*60*1000));
// Hours
let getHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// Minutes
let getMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//Second
let getSecond = Math.floor((difference % (1000 * 60)) / (1000));


  let daysHTML = document.getElementById("days");
  let hoursHTML = document.getElementById("hours");
  let minutesHTML = document.getElementById("minutes");
  let secondHTML = document.getElementById("seconds");
  daysHTML.innerHTML = getDay;
  hoursHTML.innerHTML = getHours;
  minutesHTML.innerHTML = getMinutes;
  secondHTML.innerHTML = getSecond;

}
setInterval(getData, 1000);