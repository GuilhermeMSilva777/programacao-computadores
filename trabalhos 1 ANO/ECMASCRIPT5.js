// exemplos de JS utilizando a especificação ES5
// vamos aprender
//Array.forEach()
//Array.map()
//Array.filter()
//Array.reduce()
//Array.every()
//Array.some()
//Array.indexOf()
//JSON.parse()
//JSON.stringify()
// Date.now() -> já aprendemos

//
//FUNCAO FOREATCH
//
chefe()
var conteudo = ""
function chefe(){
    let vetor = [10, 30, 50, 70, 90, 110, 130, 150, 170]

    vetor.forEach(mostra)

    vetor.forEach(acumula)
    //funcao(10, 0)
    //funcao(30, 1)
    //funcao(50, 2)
    //funcao(70, 3)
    //funcao(90, 4)

    //percorrer o vetor
    //for(let i = 0; i<vetor.lenght;i++){
    //    console.log(`O elemento ${vetor[i]} esta na posicao ${i}`)
    //}
}
//os parametros sao somente os elementos
function acumula(elemento){
    conteudo = conteudo + " = " + elemento   //concatenacao 10 = 30 = 30 = 70 = ...
}
//os parametros sao somente os elementos e as posicoes
function mostra(elemento, posicao){
    if(posicao % 2 == 0){
        console.log(`O elemento ${elemento} esta na posicao par`)
    }
    else{
        console.log(`O elemento ${elemento} esta na posicao impar`) 
    }
}
//console.log(`O elemento ${elemento} esta na posicao ${posicao}`)



//
// FUNCAO MAP
//
var idades = [10, 13, 17, 18, 19, 20, 22, 26]

var novo = idades.map(multiplica)

var novo2 = idades.map(ParImpar)

console.log(novo)

function multiplica(elemento){
    return elemento * 2
}
function ParImpar(elemento){
    if(elemento % 2 == 0){
        return 0
    }
    else{
        return 1
    }
}


//
//podemos criar variaveis do tipo funcao 
//
var x = function teste(){
    console.log(`variaveis do tipo de uma funcao`)
}
x()

var soma = function soma(a, b){
    console.log(a + b)
}
soma(3, 6)
var subtracao = function subtracao(a, b){
    console.log(a - b)
}
subtracao(6, 1)


//
//FUNCAO FILTER
//
var vet = [1, 2, 3, 4, 5]

var novo3 = vet.filter(maior)

function maior(elemento){
    return elemento >= 3
}

//filter nao deixa espacos vazios, altera o tamanho do vetor, se precisar criar um novo vetor usar filter
//map nao altera o tamanho do vetor resultante
//forEatch intera no vetor


//
//FUNCAO REDUCE
//
var idade = [7, 8, 9, 10, 11, 12, 13, 14]
var somatorio = idade.reduce(exe6)
console.log(somatorio)

// exe6(7, 8)
// exe6(15, 9)
// exe6(24, 10)
// exe6(34, 11)
function exe6(total, elemento){
    return total + elemento
}



//
//FUNCAO SOME
//se existe o valor desejado, retorna true ou false
//
var nomes = ["Pedro", "Lucas", "Carlos"]
var resultado = nomes.some(exe7)
console.log(resultado)

function exe7(elemento){
    return elemento == "Lucas"
}