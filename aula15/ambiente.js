let num = [5,8,5]
num.push(3)
num[4] = 2
console.log(`O vetor ${num} tem ${num.length} posições/elementos.`)
let pos = num.indexOf(5)
if (pos == - 1) {
    console.log("O valor não foi encontrado.")
}
else {
    console.log(`O valor 10 está na posição ${pos}`)
}
