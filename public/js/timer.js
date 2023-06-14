let btninciar = document.getElementById("btniniciar")
let divtimer = document.getElementById("divtimer")
let btnpomodoro = document.getElementById("btnpomodoro");
let btnpausacurta = document.getElementById("btnpausacurta");
let btnpausalonga = document.getElementById("btnpausalonga");
let divciclo = document.getElementById("ciclo");
let ciclomsg = document.getElementById("ciclomsg");
let pomodoromsg = "Hora do foco!";
let shortmsg = "Hora da pausa...";
let longmsg = "Hora do descanso..."
let timers = JSON.parse(localStorage.getItem("config"))
let run = false;
let distance = 0;
let timerstop = 0;
let begin = 0;
let countDownDate = 0;
let pomodoroconfigtimer = timers.pomodoroValue * 60000;
let pomodoroconfigshort = 0;
let pomodoroconfiglong = 0;
let restart = 0;
let timemark = 0;
let minutostop = 0;
let segundostop = 0;
let minutosdiff = 0;
let segundosdiff = 0;
var minutes = 0;
var seconds = 0;
var now = 0;
let ciclo = 0;
let end = false;

//guardar ciclo na localstorage
// pinterest, lado a lado, accordion

countDownDate = new Date().getTime();
countDownDate = countDownDate + pomodoroconfigtimer + 1000;

minutes = Math.floor((pomodoroconfigtimer % (1000 * 60 * 60)) / (1000 * 60));
seconds = Math.floor((pomodoroconfigtimer % (1000 * 60)) / 1000);
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


btnpausacurta.toggleAttribute("disabled");
btnpausalonga.toggleAttribute("disabled");

btnpomodoro.onclick = function () {
  if (end) {
    ciclo += 1;
    divciclo.innerHTML = ciclo + "#"
    localStorage.setItem("ciclo", divciclo.innerHTML);
  }
  ciclomsg.innerHTML = pomodoromsg;
  timers = JSON.parse(localStorage.getItem("config"))
  restart = 0;
  run = false;
  btninciar.innerHTML = "Iniciar"
  pomodoroconfigtimer = timers.pomodoroValue * 60000
  pomodoroconfigshort = 0;
  pomodoroconfiglong = 0
  countDownDate = new Date().getTime();
  countDownDate = countDownDate + pomodoroconfigtimer;
  distance = countDownDate - now + restart;
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //console.log("minutos: " + minutes + "\nsegundos: " + seconds)
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
  btnpomodoro.toggleAttribute("disabled", true);
  btnpausacurta.toggleAttribute("disabled", false);
  btnpausalonga.toggleAttribute("disabled", false);
}


btnpausacurta.onclick = function () {
  ciclomsg.innerHTML = shortmsg;
  timers = JSON.parse(localStorage.getItem("config"))
  console.log("click")
  restart = 0;
  run = false;
  btninciar.innerHTML = "Iniciar"
  pomodoroconfigtimer = 0;
  pomodoroconfigshort = timers.shortValue * 60000;
  pomodoroconfiglong = 0
  countDownDate = new Date().getTime();
  countDownDate = countDownDate + pomodoroconfigshort;
  distance = countDownDate - now + restart;
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //console.log("minutos: " + minutes + "\nsegundos: " + seconds)
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
  btnpomodoro.toggleAttribute("disabled", false);
  btnpausacurta.toggleAttribute("disabled", true);
  btnpausalonga.toggleAttribute("disabled", false);
}


btnpausalonga.onclick = function () {
  ciclomsg.innerHTML = longmsg;
  timers = JSON.parse(localStorage.getItem("config"))
  restart = 0;
  run = false;
  btninciar.innerHTML = "Iniciar"
  pomodoroconfigtimer = 0;
  pomodoroconfigshort = 0;
  pomodoroconfiglong = timers.longValue * 60000;
  countDownDate = new Date().getTime();
  countDownDate = countDownDate + pomodoroconfiglong;
  distance = countDownDate - now + restart;
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //console.log("minutos: " + minutes + "\nsegundos: " + seconds)
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
  btnpomodoro.toggleAttribute("disabled", false);
  btnpausacurta.toggleAttribute("disabled", false);
  btnpausalonga.toggleAttribute("disabled", true);
}




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
  now = new Date().getTime();
  // Find the distance between now and the count down date
  distance = countDownDate - now + restart;
  //distance = Math.abs(distance)
  //console.log(distance)

  // Time calculations for days, hours, minutes and seconds
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //console.log("segundos : " + seconds)

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
    if (pomodoroconfigtimer > 0) {
      end = false;
      if (ciclo % 4 == 0 && ciclo > 0) {
        btnpausalonga.click();
        if (timers.autolong.pressed === "true") {
          btninciar.click();
        }
      } else {
        btnpausacurta.click();
        if (timers.autoshort.pressed === "true") {
          console.log("if")
          btninciar.click();
        } 
      }
      return;
    }
    if (pomodoroconfigshort > 0) {
      end = true;
      btnpomodoro.click();
      if (timers.autopomodoro.pressed === "true") {
        btninciar.click();
      }
      return;
    }
    if (pomodoroconfiglong > 0) {
      end = true;
      btnpomodoro.click();
      if (timers.autopomodoro.pressed === "true") {
        btninciar.click();
      }
    }
    /* como saber se ta na pausa curta? 
    pomorodoconfigshort?
    botão com atributo disabled?
    valor do tempo?
    multiplo de 4 (modulo)
    */
  }
  console.log(ciclo)
}, 1000);

// Update the count down every 1 second


