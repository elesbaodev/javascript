var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${min}`)
if (hora < 12 && hora > 5) {
    console.log("Bom dia!")
} else if (hora <= 18 && hora > 11) {
    console.log("Boa tarde!")
} else if (hora >= 19) {
    console.log("Boa noite!")
} else if (hora = 1) {
    console.log("Boa madrugada.")
}