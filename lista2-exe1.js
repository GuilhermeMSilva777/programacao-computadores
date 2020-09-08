chefe()
function chefe(){
    //vetor de escopo global
    let vendendores = []
    let vendas = []
    let opcao = Number(prompt(`Escolha : \n [1].Cadastrar vendedor \n [2].Cadastrar venda \n [3].Sair`))
    do{
        switch(opcao){
            case 1: cadastraVendedores(vendendores)
                    break
            case 2: cadastraVendas(vendas, vendendores)
                    break
            case 3: console.log(`Obrigado por usar nosso programa !!!`)
            default: console.log(`Tente novamente...`)
        }
    }
    while(opcao != 3)
    cadastraVendedores(vendendores) //essa passagem é por referencia e torna o vetor de escopo global
}
function cadastraVendedores(vended){ //vended representa o vetor vendedores
    let objeto = new Object
    objeto.codigo = Number(prompt(`Informe o codigo do vendedor`))
    objeto.nome = prompt(`Informe o nome do vendedor`)
    for(let i = 0; i<vended.length; i++){
        if(vended[i].codigo == objeto.codigo){
            console.log(`Cadastro cancelado pois ja existe um vendedor com esse codigo`)
            return 0 //sai da funcao
        }
    }
    vended.push(objeto)
}
function cadastraVendas(vdas, vdes){ //vdas=vendas e vdes=vendedores
    let objeto = new Object
    objeto.codigo = Number(prompt(`Informe o codigo da venda`))
    objeto.vendedor = Number(prompt(`Informe o codigo do vendedor`))
    objeto.mes = Number(prompt(`Informe o mes da venda`))
    objeto.valor = Number(prompt(`Informe o valor da venda`))
    for(let i = 0; i<vdes.length; i++){
        if(objeto.vendedor == vdes[i].codigo){
            for(let j = 0; j<vdas.length; j++){
                if((objeto.mes == vdas[i].mes)&&(objeto.vendedor == vdas[i].vendedor)){
                    console.log(`Nao podemos registrar`)
                    return 0
                }
            }
            vdas.push(objeto)
            console.log(`Venda registrada`)
            return 0
        }
    }
    console.log(`Vendedor nao existe`)
}