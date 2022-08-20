// Método Find AND Método FindIndex

//Find

let arrayTeste = [

    {nome:'Gabriel', idade: 28}, // 0
    {nome:'Gabriel', idade: 18}, // 1
    {nome:'Bruno', idade: 58},  // 2
]
console.log(arrayTeste.find((item) => item.nome == 'Gabriel'))


// FindIndex

console.log(arrayTeste.findIndex((item) => item.nome == 'Bruno'))

