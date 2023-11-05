let num = [5,1,4]
num.push(3)
num[4] = 2
num.sort()

for(let cont = 0; cont < num.length; cont++) {
    console.log(`Posição ${num[cont]}`)
}  console.log("Ao total " + num.length + " elementos.")
