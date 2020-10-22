//criando uma variavel do tipo function
var cadastra = function(vet){
    //inserindo dados sem dar nome ao objeto
    vet.push(
        {
            codigo = Number(prompt(`Codigo da bike : `)),
            aro = Number(prompt(`Aro da bike : `)),
            modelo = prompt(`Modelo da bike : `),
            marca = prompt(`Mraca da bike : `),
            valor = Number(prompt(`Valor da bike : `)),
            ano = Number(prompt(`Ano de fabricação da bike : `))
        }
    )
    console.log(`Bike ${vet[vet.length-1].codigo} inserida com sucesso`)
}

var codigo
var busca = function(vet){
    codigo = prompt(`Informe o codigo : `)
    //retorna o primeiro que acha
    let bike = vet.find(busca2)
    console.log(bike)
}
//busca2(bike0)
//busca2(bike1)
//busca2(bike2)
//...
function busca2(objeto){
    return objeto.codigo == codigo
}

var soma = function(vet){
    let resultado = vet.reduce(soma2, 0) //faz um for e soma os valores das bikes - inicia com 0
    console.log(`A soma dos valores = ${resultado}`)
}

var soma2= function(total, objeto){
    return total + objeto.valor
} 

var marca
var buscamarca = function(vet){
    marca = prompt(`Informe a marca : `)
    //retorna todaos que encontrar
    let novas = vet.filter(buscamarca2)
    console.log(novas)
}

function buscamarca2(objeto){
    return marca == objeto.marca
}

var soma3 = function(vet){
    let novo = vet.map(soma32)
    console.log(novo)
}

function soma32(objeto){
    objeto.aro = objeto.aro + 3
    return objeto
}

var vetor = []
cadastra(vetor)
cadastra(vetor)
cadastra(vetor)
busca(vetor)
soma(vetor)
buscamarca(vetor)