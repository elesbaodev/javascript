
function calcAnos() {
    var nas = window.document.getElementById("nasc")
    var num = Number(nas.value)
    var ano = new Date()
    var anos = ano.getFullYear()
    var res = window.document.getElementById("res")
    var res = anos - num
    window.alert(res)
    var text = window.document.getElementById("text")
    var masc = window.document.querySelector("input#masc")
    var fem = window.document.querySelector("input#fem")
    var sex = window.document.querySelector

    if (sex == masc) {
        text.innerHTML = "Opa"
        
    } else if (sex == fem ) {
        text.innerHTML = "Oi"
    }
    

}
