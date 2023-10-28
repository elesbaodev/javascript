var nas = window.document.getElementById("nasc")
var num = Number(nas.value)
var cont = num
var ano = new Date().getFullYear()
var res = window.document.getElementById("res")
var res = 2023 - cont

function calcAnos() {
    window.alert(res)
    

}