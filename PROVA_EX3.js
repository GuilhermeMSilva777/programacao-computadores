chefe()
function chefe(){
    let pessoa = []
    let imovel = []
    let opcao = Number(prompt(`Escolha : \n [1].Cadastrar pessoa \n [2].Cadastra imovel \n [3].Mostra o valor total em imóvel de uma pessoa X 
    \n [4].Mostra o cpf da pessoa que tem o imóvel mais caro \n [5].Sair`))
    do{
        switch(opcao){
            case 1: cadastraPessoa(pessoa)
                    break
            case 2: cadastraImovel(pessoa, imovel)
                    break
            case 3: consultaTotalImoveis(pessoa, imovel)
                    break
            case 4: consultaImovelMaisCaro(pessoa, imovel)
                    break
            case 5 : console.log(`Obrigado por usar nosso programa !!!`)
            default: console.log(`Tente novamente...`)
        }
    }
    while(opcao != 5)
}
function cadastraPessoa(pes){
    let objeto = new Object
    objeto.rg = Number(prompt(`Informe o RG da pessoa`))
    objeto.cpf = Number(prompt(`Informe o CPF da pessoa`))
    objeto.nome = prompt(`Informe o nome da pessoa`)
    pes.push(objeto)
}
function cadastraImovel(pes, imv){
    let objeto = new Object
    objeto.codigo = Number(prompt(`Informe o codigo da venda`))
    objeto.endereco = prompt(`Informe o codigo do vendedor`)
    objeto.tamanho = Number(prompt(`Informe o mes da venda`))
    objeto.tipo = prompt(`Informe o valor da venda`)
    objeto.valor = Number(prompt(`Informe o valor da venda`))
    objeto.rgdono = Number(prompt(`Informe o valor da venda`))
    for(let i = 0; i<pes.length; i++){
        if(objeto.rgdono == pes[i].rg){
            imv.push(objeto)
            console.log(`Imovel registrado`)
            return 0
        }
    }
    console.log(`RG nao cadastrado`)
}
function consultaTotalImoveis(pes,imv){
    let rgsoma = Number(prompt(`Informe o RG a ser consultado`))
    let nometotal = pes[0].nome 
    let cpftotal = pes[0].cpf 
    let soma = 0
    for(let i = 0;i<imv.length;i++){
        if(rgsoma == imv[i].rgdono){ 
            soma = soma + imv[i].valor
        }
    }
    console.log(`A pessoa ${nometotal} cujo CPF é ${cpftotal} tem um valor total em imoveis de R$${MaisCaro}`)
}
function consultaImovelMaisCaro(pes,imv){
    let MaisCaro = imv[0].valor 
    let CpfMaisCaro = pes[0].cpf 
    for(let i = 0;i<pes.length;i++){
        if(imv[i].valor > MaisCaro){
            MaisCaro = imv[i].valor 
            CpfMaisCaro = pes[i].cpf 
        }
    }
    console.log(`O cpf ${CpfMaisCaro} tem o imovel mais caro de R$${MaisCaro}`)
}