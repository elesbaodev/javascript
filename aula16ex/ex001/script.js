var numb = window.document.getElementById("numm")
var num = Number(numb.value)
let add = window.document.querySelector("input#add")
let seletor = window.document.querySelector("select#seletor")
add.addEventListener("click", analisador)

function analisador() {

    alert(num)
    /*let item = window.document.createElement("option")
    item.text = num
    item.value = "seletor"
    seletor.appendChild(item) */

}