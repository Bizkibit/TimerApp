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
      fetch("/", {
        method: "post",
        content: {
          time: timerDisplay.textContent;
        }
      })
      timerDisplay.textContent= "0";
      time = 0;
      restart.style.display = "none";
      start.style.display = "inline-block";

    })

    stop.addEventListener("click", (e) => {
      e.stopPropagation();
      clearInterval(session);
      stop.style.display = "none";
      restart.style.display = "inline-block";
    })
  })
}
