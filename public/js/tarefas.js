let addtarefa = document.getElementById("addtarefa")
let formtarefa = document.getElementById("formtarefa")
let btnlimpar = document.getElementById("btnlimpar")
let btnsalvar = document.getElementById("btnsalvar")

//let span = $("#" + id_tarefa).find("span")[0]

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



function teste(id_tarefa) {
    let div = document.getElementById(id_tarefa)
    let cards = document.querySelectorAll("div.card")
    console.log(cards)
    cards.forEach(function(card) {
        card.classList.remove("cardclick")
    });
    div.classList.add("cardclick")

    
}

