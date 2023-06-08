let btninciar = document.getElementById("btniniciar")
let divtimer = document.getElementById("divtimer")
let run = false;
let distance = 0;
let timerstop = 0;
let countDownDate = 0;
let pomodoroconfigtimer = 0.5;
let restart = 0;
let timemark = 0;
let minutostop = 0;
let segundostop = 0;
let minutosdiff = 0;
let segundosdiff = 0;

countDownDate = new Date().getTime();
countDownDate = countDownDate + (pomodoroconfigtimer * 60000);


btninciar.onclick = function () {
  if (btninciar.innerHTML === "Iniciar") {
    run = true;
    btninciar.innerHTML = "Pausar"

  } else {
    run = false;
    //adicionar flag, pegar o innerHTML, converter para int, colocar em milisegundos, e adicionar no timer (distance)
    btninciar.innerHTML = "Iniciar"
    timerstop = divtimer.innerHTML
    timerstop = timerstop.split(":")
    minutostop = timerstop[0] * 60000;
    segundostop = timerstop[1] * 1000;
    timerstop = minutostop + segundostop;
  }
}


var pomodoro = setInterval(function () {
  if (!run) {
    restart += 1000;
  }
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  distance = countDownDate - now + restart;
  console.log(distance)

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (run) {
    // Display the result in the element with id="demo"
    divtimer.innerHTML = (minutes + minutosdiff) + ":" + (seconds + segundosdiff);

    if (seconds < 10) {
      divtimer.innerHTML = (minutes + minutosdiff) + ":" + "0" + (seconds + segundosdiff);
    }

    if (minutes < 10) {
      divtimer.innerHTML = "0" + (minutes + minutosdiff) + ":" + (seconds + segundosdiff);
      if (seconds < 10) {
        divtimer.innerHTML = "0" + (minutes + minutosdiff) + ":" + "0" + (seconds + segundosdiff);
      }

    }
  }
  //If the count down is finished, write some text
  if (distance < 1000) {
    clearInterval(pomodoro);
  }
}, 1000);

// Update the count down every 1 second


