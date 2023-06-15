let addtarefa = document.getElementById("addtarefa")
let formtarefa = document.getElementById("formtarefa")
let btnlimpar = document.getElementById("btnlimpar")
let btnsalvar = document.getElementById("btnsalvar")

document.onclick = function(e) {
    if (e.target === addtarefa) {
        addtarefa.style.display = "none"
        formtarefa.style.display = "block"
    } else if (e.target === btnlimpar) {
        addtarefa.style.display = "block"
        formtarefa.style.display = "none"
    } else if (e.target === btnsalvar) {
        addtarefa.style.display = "block"
        formtarefa.style.display = "none"
    }
}

