let pomodorotimer = document.getElementById("pomodorotimer");
let pomodoroshort = document.getElementById("pomodoroshort");
let pomodorolong = document.getElementById("pomodorolong");
let autopomodoro = document.getElementById("autopomodoro");
let autoshort = document.getElementById("autoshort");
let autolong = document.getElementById("autolong");
let save = document.getElementById("saveopt");
let ciclocount = document.getElementById("ciclo")
let btncicloreset = document.getElementById("btncicloreset")

if (localStorage.getItem("config") == null) {
    let padrao = {
        pomodoroValue: "25",
        shortValue: "5",
        longValue: "15",
        autopomodoro: {
            pressed : false,
            class : ""
        },
        autoshort: {
            pressed : false,
            class : ""
        },
        autolong: {
            pressed : false,
            class : ""
        },
    }

    localStorage.setItem("config", JSON.stringify(padrao))
}



let cicloconfig = localStorage.getItem("ciclo")
let setconfig = JSON.parse(localStorage.getItem("config"));

if (cicloconfig == null) {
    localStorage.setItem("ciclo", "0\#")
}

ciclocount.innerHTML = cicloconfig;
pomodorotimer.setAttribute("value", setconfig.pomodoroValue);
pomodoroshort.setAttribute("value", setconfig.shortValue);
pomodorolong.setAttribute("value", setconfig.longValue);
autopomodoro.setAttribute("aria-pressed", setconfig.autopomodoro.pressed);
autopomodoro.setAttribute("class", autopomodoro.getAttribute("class") + " "+ setconfig.autopomodoro.class)
autoshort.setAttribute("aria-pressed", setconfig.autoshort.pressed);
autoshort.setAttribute("class", autoshort.getAttribute("class") + " " + setconfig.autoshort.class)
autolong.setAttribute("aria-pressed", setconfig.autolong.pressed);
autolong.setAttribute("class", autolong.getAttribute("class") + " " + setconfig.autolong.class)


save.onclick = function () {
    let config = {
        pomodoroValue: pomodorotimer.value,
        shortValue: pomodoroshort.value,
        longValue: pomodorolong.value,
        autopomodoro: {
            pressed : autopomodoro.ariaPressed,
            class : getActive("autopomodoro")
        },
        autoshort: {
            pressed : autoshort.ariaPressed,
            class : getActive("autoshort")
        },
        autolong: {
            pressed : autolong.ariaPressed,
            class : getActive("autolong")
        },
    }

    localStorage.setItem("config", JSON.stringify(config))

    btnpomodoro.click();
    btnpausacurta.click();
    btnpausalonga.click();
    btnpomodoro.click();

    let setconfig = JSON.parse(localStorage.getItem("config"));
    pomodorotimer.setAttribute("value", setconfig.pomodoroValue);
    pomodoroshort.setAttribute("value", setconfig.shortValue);
    pomodorolong.setAttribute("value", setconfig.longValue)

    console.log(getActive("autopomodoro"));
}

btncicloreset.onclick = function() {
    localStorage.setItem("ciclo", "0\#")
    cicloconfig = localStorage.getItem("ciclo")
    ciclocount.innerHTML = cicloconfig;
}

function getActive(element) {
    let elemento = document.getElementById(element)
    let classe = elemento.getAttribute("class")
    let estado;
    estado = classe.substring(classe.lastIndexOf("n") + 1, classe.length)
    return estado;
}
