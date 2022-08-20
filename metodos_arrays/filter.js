/*
    MÉTODO FILTER -- > Retorna os elementos da array que satisfazem a condição dada
    Conte quantos carros existem de cada MARCA
    Retorne um array que tenha apenas os carros de 2016 a 2019
*/
const carros = [
    {marca: 'VW', modelo:'POLO', ano:2018},
    {marca: 'VW', modelo:'POLO', ano:2021},
    {marca: 'VW', modelo:'GOLF', ano:2022},
    {marca: 'VW', modelo:'SAVEIRO', ano:2016},
    {marca: 'VW', modelo:'GOLF', ano:2017},
    {marca: 'FIAT', modelo:'STADA', ano:2020},
    {marca: 'VW', modelo:'AMAROK', ano:2021},
    {marca: 'FIAT', modelo:'TORO', ano:2022},
    {marca: 'FIAT', modelo:'PUNTO', ano:2018},
    {marca: 'TOYOTA', modelo:'COROLLA', ano:2021},
    {marca: 'FIAT', modelo:'TORO', ano:2020}
]

// QUANTIDADE DE CARROS DA MARCA VW
let filterMarca = carros.filter((item) => item.marca == 'VW')
console.log(filterMarca.length)

// QUANTIDADE DE CARROS DA MARCA FIAT
let filterMarca1 = carros.filter((item) => item.marca == 'FIAT')
console.log(filterMarca1.length)


// QUANTIDADE DE CARROS DA MARCA TOYOTA
let filterMarca2 = carros.filter((item) => item.marca == 'TOYOTA')
console.log(filterMarca2.length)

// CARROS DE 2016 A 2019
let filterAno = carros.filter((item) => item.ano >= 2016 && item.ano <= 2019)
for(let x = 0; x < filterAno.length; x++){
    console.log(filterAno[x])
}