// MÉTODO REDUCE 

let arrayTeste = [2,3,4,6]


function verificaNum(array){
    const resultadoTeste = array.reduce((a, b) => (a + b), 0)
    if(resultadoTeste %  2 == 0){
        return 'PAR'
    }
    return 'ÍMPAR'
}

console.log(verificaNum(arrayTeste))
