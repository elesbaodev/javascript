function Tabuada() {
    let inicio = window.document.querySelector("input#numero01")
    let n1 = Number(inicio.value)
    let saida = window.document.querySelector("select#saida")
    let novoHTML = " "

    if (n1 == 0) {
        alert("[ERRO] Digite um número!")
    } else {
        saida.innerHTML = " "
        for (let cont = 1; cont <= 10 && n1 <= 10; cont++ && n1) {
            let item = document.createElement("option")
            item.text = `${n1} x ${cont} = ${n1*cont}`
            item.value = `saida${cont}`
            saida.appendChild(item) 
    }
        
    }

    
}