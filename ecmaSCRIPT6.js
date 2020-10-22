// es1 , es2, es3, es4 
function soma(x, y){
    console.log(x + y)
}
soma(2, 7)


// es5
let soma = function(x, y){
    console.log(x + y)
}
soma(2, 7)


// ECMASCRIPT 6
//arrow functions - funcoes com seta =>
//antes da seta temos os parametros da funcao (x, y)
//depois da seta temos a implementacao da funcao (console.log(x + y))
//ausencia da palavra function
//funcao anonima - funcao sem nome
let soma = (x, y) => console.log(x + y)
soma(2, 7)

let vet = [2, 4 , 6, 8, 9]
let novo = vet.filter(elemento => elemento > 5)
console.log(novo)
// =====
let vet = [2, 4 , 6, 8, 9]
console.log(vet.filter(elemento => elemento > 5))



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var codigo
var busca = (vet) => {
    codigo = prompt(`Informe o codigo : `)
    let bike = vet.find((objeto) =>
                {objeto.codigo == codigo})
    console.log(bike)
}

var soma = (vet) => {
    let resultado = vet.reduce( (total, objeto) =>
            {total + objeto.valor}, objeto[0].valor)
    console.log(`A soma dos valores = ${resultado}`)
}

var marca
var buscamarca = (vet) => {
    marca = prompt(`Informe a marca : `)
    let novas = vet.filter((objeto) =>
            {marca == objeto.marca})
    console.log(novas)
}

var soma3 = (vet) => {
    let novo = vet.map((objeto) => {
            objeto.aro = objeto.aro + 3
            objeto
        })
    console.log(novo)
}

let maisVelha = (vet) => {
    let achou = vet[0].idade
    vet.forEach((objeto) => {
        if(objeto.ano < achou){
            achou = objeto.ano
        }
    })
}