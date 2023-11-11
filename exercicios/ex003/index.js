const prompt = require("prompt-sync")() 
var signos = prompt("")
switch (signos) {

    case 1: console.log("Aries")
    break
    case 2: console.log("Leão")
    break
    case 3: console.log("Sagitário")
    break
    default: console.log("Você não tem nenhum signo de fogo.")
}