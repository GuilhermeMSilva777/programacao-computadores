chefe()
function chefe(){
    let matriz = []
    let carros = []
    let opcao = Number(prompt(`Escolha : \n [1].Cadastrar os carros \n [2].Calcula media das notas de cada carro \n [3].Mostra o modelo do carro com menor nota em cada avaliação \n [4].Sair`))
    do{
        switch(opcao){
            case 1: cadastraCarro(carros, matriz)
                    break
            case 2: consultaMediaNotas(carros, matriz)
                    break
            case 3: consultaMenorNota(carros, matriz)
                    break
            case 4 : console.log(`Obrigado por usar nosso programa !!!`)
            default: console.log(`Tente novamente...`)
        }
    }
    while(opcao != 4)
}
function cadastraCarro(car, mat){
    for(let i = 0;i<4;i++){
        let objeto = new Object
        objeto.marca = prompt(`Informe a marca do carro`)
        objeto.modelo = prompt(`Informe o modelo do carro`)
        objeto.ano = Number(prompt(`Informe o ano do carro`))
        objeto.valor = Number(prompt(`Informe o valor do carro`))
        objeto.media = 0
        car.push(objeto)
        mat[i] = []
        for(let j = 0;j<5;j++){ 
            mat[i][j] = Number(prompt(`Infome a nota da aviliacao ${j+1}`))
        }
    }
}
function consultaMediaNotas(car,mat){
    for(let i = 0;i<4;i++){
        for(let j = 0;j<5;j++){
            car[i].media = car[i].media + mat[i][j]
        }
        car[i].media = car[i].media / 5
        console.log(`O carro de modelo ${car[i].marca} e modelo ${car[i].modelo} tem media de motas = ${car[i].media}`)
    }
}
function consultaMenorNota(car,mat){
    for(let j = 0;j<5;j++){ 
        let MenorNota = mat[0][j] 
        let ModeloMenorNota = car[0].modelo 
        for(let i = 0;i<4;i++){
            if(mat[i][j] < MaiorNota){
                MenorNota = mat[i][j]
                ModeloMenorNota = car[i].modelo
            }
        }
        console.log(`Na avaliacao ${j+1} o carro de modelo ${ModeloMenorNota} tem a menor nota = ${MenorNota}`)
    }
}