
const valueName = process.argv[2]
const age = process.argv[3]

if(!valueName && !age){
    console.log("Digite seu nome e sua idade")
} else {
    let newAge = Number(age) + 7
    console.log(`"Olá, ${valueName}! Vocè tem ${age} anos.\n Em sete anos você terá ${newAge} anos."`)
}
