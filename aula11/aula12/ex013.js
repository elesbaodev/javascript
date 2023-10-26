var agora = new Date()
var diaSem = agora.getDay()
var diaMes = agora.getDate()
/*
    0 = Domingo
    1 = Segunda 
    2 = Terça
    3 = Quarta 
    4 = Quinta 
    5 = Sexta 
    6 = Sábado
*/

//console.log(diaSem)
switch(diaSem) {
    case 0: 
        console.log(`Domingo dia ${diaMes}`)
        break
    case 1: 
        console.log(`Segunda dia ${diaMes}`)
        break
    case 2:
        console.log(`Terça dia ${diaMes}`)
        break
    case 3:
        console.log(`Quarta dia ${diaMes}`)
        break
    case 4: 
        console.log(`Quinta dia ${diaMes}`)
        break
    case 5: 
        console.log(`Sexta dia ${diaMes}`)
        break
    case 6:
        console.log(`Sábado dia ${diaMes}`)
        break
    default: 
        console.log("[ERRO] Dia inválido!")
        break
}