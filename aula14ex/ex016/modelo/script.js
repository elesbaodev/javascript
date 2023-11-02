function Contar() {
    var numero01 = window.document.querySelector("input#inicio")
    var n1 = Number(numero01.value)
    var numero02 = window.document.querySelector("input#fim")
    var n2 = Number(numero02.value)
    var passo = window.document.querySelector("input#passo")
    var n3 = Number(passo.value)
    var cont = window.document.getElementById("contar")
    var saida = window.document.querySelector("div#saida")
    var novoHTML = " "

    for(n1 = Number(numero01.value); n1 <= n2; n1++) {
        novoHTML += n1 + "   "

    }

    saida.innerHTML = novoHTML
    
}