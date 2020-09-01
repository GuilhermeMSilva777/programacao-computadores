chefe()

function chefe(){
    //utilizar a variavel LET ao inves de VAR
    //faz com que o vetor exista apenas dentro dessa funcao(escopo local)
    let vetor = []
    do{
        var opcao = Number(prompt(`Digite : \n [1]. Entrada \n [2]. Média das idades \n [3]. Maior idade \n [4]. Quantidade \n [5]. Percentual \n [6]. sair`))
        switch(opcao){
            case 1: entrada(vetor)
                    break
            case 2: calculaMedia(vetor)
                    break
            case 3: calculaMaiorIdade(vetor)
                    break
            case 4: CalculaQtde(vetor)
                    break
            case 5: CalculaPercentual(vetor)
                    break
            case 6: console.log(`Obrigado por usar nosso programa !!!`)
                    break
            default: console.log(`Opcao invalida, tente novamente !!!`) 
        }
    }
    while(opcao != 6)
}
function entrada(vet){
    console.log(`Entrou na função entrada`)
    //cria objeto
    let objeto = new Object
    objeto.sexo = prompt(`Informe M para masculino e F para feminino`).toUpperCase()
    objeto.altura = Number(prompt(`Informe a altura`)) 
    objeto.idade = Number(prompt(`Informe a idade`))
    objeto.olhos = prompt(`Informe A(azul), V(verde) ou C(castanho)`).toUpperCase()
    //vamos inserir em vetor e nn em vet
    vet.push(objeto)
    console.log(`Habitante inserido com sucesso`)
}
function calculaMedia(vet){
    console.log(`Entrou na função calcular média`) 
    let soma = 0
    let qtde = 0
    for(let i =0;i<vet.length;i++){
        if((vet[i].olhos == "C") && (vet[i].altura > 1.60)){
            soma = soma + vet[i].idade
            qtde++
        }
    }
    console.log(`A média das idades das pessoas com olhos castanhos e com altura maior que 1.60 = ${soma/qtde}`)
}
function calculaMaiorIdade(vet){
    console.log(`Entrou na função calcular maior idade`)
    let maioridade = -1
    for(let i =0;i<vet.length;i++){
        if((vet[i].idade > maioridade)){
            maioridade = vet[i].idade
        }
    } 

}
function CalculaQtde(vet){
    console.log(`Entrou na função calcular quantidade`) 

}
function CalculaPercentual(vet){
    console.log(`Entrou na função calcular pencentual`) 

}