function trocar() {
    var horas = new Date()
    var minuts = horas.getMinutes()
    var agora = horas.getHours()
    var horad = window.document.querySelector("div.horass")
    var img01 = window.document.getElementById("img")
    var pa = window.document.getElementById("p1").innerHTML = `Agora são ${agora}:${minuts} `

    if (agora < 12) {
        // BOM DIA!
        document.body.style.background = "#e2cd9f"
        img01.innerHTML = "<img src = 'imagens/diaimg.jpg' width = '250'>"
        
    } else if (agora > 11 && agora < 19) {
        // BOA TARDE!
        document.body.style.background = "rgb(117, 75, 47)"
        img01.innerHTML = "<img src = 'imagens/tardeimg.jpg' width = '250'>"
    } else  {
        // BOA NOITE!
        document.body.style.background = "rgb(63, 63, 63)"
        img01.innerHTML = "<img src = 'imagens/noiteimg.jpg' width = '250'>"
    
    }

}


