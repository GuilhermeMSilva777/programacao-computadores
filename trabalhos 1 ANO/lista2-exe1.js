chefe()
function chefe(){
    //vetor de escopo global
    let vendendores = []
    let vendas = []
    let opcao = Number(prompt(`Escolha : \n [1].Cadastrar vendedor \n [2].Cadastrar venda \n [3].Consulta vendas do vendedor em determinado mes \n [4].Consulta a soma das vendas do vendedor 
    \n [5].Consulta a soma das vendas do vendedor \n [6].Consulta os valores do meses \n [7].Sair`))
    do{
        switch(opcao){
            case 1: cadastraVendedores(vendendores)
                    break
            case 2: cadastraVendas(vendas, vendendores)
                    break
            case 3: consultaVendasFuncionarioMes(vendas)
                    break
            case 4: consultaVendasFuncionario(vendas)
                    break
            case 5: consultaVendedorMes(vendas)
                    break
            case 6: consultaMes(vendas)
                    break
            case 7: console.log(`Obrigado por usar nosso programa !!!`)
            default: console.log(`Tente novamente...`)
        }
    }
    while(opcao != 7)
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
function consultaVendasFuncionarioMes(vdas){
    let vendedor = Number(prompt(`Informe o codigo do vendedor`))
    let mes = Number(prompt(`Informe o mes da venda`))
    for(let i = 0; i<vdas.length ;i++){
        if((vdas[i].vendedor == vendedor)&&(vdas[i].mes == mes)){
            console.log(`Valor da venda = RS${vdas[i].valor}`)
            return
        }
    }
    console.log(`Nenhuma venda desse funcionario neste mes`)
}
function consultaVendasFuncionario(vdas){
    let vendedor = Number(prompt(`Informe o codigo do vendedor`))
    let soma = 0
    for(let i = 0; i<vdas.length ;i++){
        if(vdas[i].vendedor == vendedor){
            soma = soma + vdas[i].valor
        }
    }
    console.log(`Total das vende desse funcionario = ${soma}`)
}
function consultaVendedorMes(vdas){
    let mes = Number(prompt(`Informe o mes`))
    let maiorvenda = 0
    let vendedorMaisVendeu = 0
    for(let i = 0; i<vdas.length ;i++){
        if(vdas[i].mes == mes){
            if(vdas[i].valor > maiorvenda){
                maiorvenda = vdas[i].valor
                vendedorMaisVendeu = vdas[i].vendedor
            }
        }
    }
    console.log(`Vendedor com mais vendas nesse mes = ${vendedorMaisVendeu} e valor = ${maiorvenda}`)
}
function consultaMes(vendas){
    let mes = [0,0,0,0,0,0,0,0,0,0,0,0]
    for(let i = 0; i<vdas.length ;i++){
        let posicao = vdas[i].mes - 1   //descubro a posicao para colocar
        meses[posicao] = meses[posicao] + vdas[i].valor //acumula o valor
    }
    //encontraremos o maior valor vendido
    let maiorvalor = meses[0]
    for(let i = 0; i<vdas.length ;i++){
        if(meses[i] > maiorvalor){
            maiorvalor = meses[i]
        }
    }
    let posicao = meses.indexOf(maiorvalor)
    console.log(`Mes que houve mais vendas = ${posicao+1}`)
}