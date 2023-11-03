// Meu código (03/11/23)
function Contar() {
    var numero01 = window.document.querySelector("input#inicio")
    var numero02 = window.document.querySelector("input#fim")
    var passo = window.document.querySelector("input#passo")
    var n1 = Number(numero01.value)
    var n2 = Number(numero02.value)
    var n3 = Number(passo.value)
    var saida = window.document.getElementById("saida")
    var novoHTML = " "

    if ( n1 || n2 == 0 ) {
        saida.innerHTML= "Impossível contar!"
    }
      if (n1 && n2 > 1 && n3 == 0) {
        for(n1 = Number(numero01.value); n1 <= n2; n1++) {
            var cont = "🏴󠁥󠁴󠁳󠁮󠁿"
           saida.innerHTML =  novoHTML += n1 + "\u{1F449}"
           
           
           
        } 
    } else if (n3 >= 1) {
        for(n1 = Number(numero01.value); n1 <= n2; n1 = n1 + n3) {
            saida.innerHTML =  novoHTML += n1 + " \u{1F449}"
        } 
        saida.innerHTML += "\u{1F3F4}"
    } 
    if (n1 > n2 && n3 == 0) {
        for(n1 = Number(numero01.value); n1 >= n2; n1--) {
            saida.innerHTML=  novoHTML += n1 + " \u{1F449}"
         } 
         saida.innerHTML += "\u{1F3F4}"
      
    } else if (n1 > n2 && n3 >= 1) {
        for(n1 = Number(numero01.value); n1 >= n2; n1 = n1 - n3) {
            saida.innerHTML =  novoHTML += n1 + "\u{1F449}"
        } 
        saida.innerHTML += "\u{1F3F4}"
    }
    
    
}
