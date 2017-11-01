// let timer = require("../../models/time");
// var requirejs = require('requirejs');

// let timer = requirejs("../../controller/timerController")


window.onload = function()  {
  let time = 0;
  let dv = document.querySelector("#timer");
  let start = document.querySelector(".start");
  let stop = document.querySelector(".stop")
  let timerDisplay = document.querySelector("#timer>p");
  let restart = document.querySelector(".restart");
  let session;

  start.addEventListener("click", () => {
    session = setInterval(()=>{timerDisplay.textContent = `${time++}`, 500});
    start.style.display = "none";
    stop.style.display = "inline-block";

    restart.addEventListener("click", (e) => {

      timerDisplay.textContent= "0";
      restart.style.display = "none";
      start.style.display = "inline-block";
      // timer.create({current_time: time})
      // .then(timer => console.log(timer));
      createTime({current_time: time});
      time = 0;

    })

    stop.addEventListener("click", (e) => {
      e.stopPropagation();
      clearInterval(session);
      stop.style.display = "none";
      restart.style.display = "inline-block";
    })
  })
}

function createTime ({current_time})  {
  const fData = new FormData();
  
  fData.set('current_time', current_time);
  return fetch('/', {
  method: 'POST',
  body: fData
  });
}
