let num = [5,1,4]
num.push(4)
num[4] = 6
num.sort()
/*for(let cont = 0; cont < num.length; cont++) {
    console.log(`Posição ${num[cont]}`)
}  console.log("Ao total " + num.length + " elementos.")
*/

for(let cont in num) {
    console.log(`A posição ${cont} tem o valor ${num[cont]}.`)
    
}
