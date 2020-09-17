chefe()
function chefe(){
    // declarar a matriz das pontuacoes
    let matriz = [] // uma matriz é um vetor
    // vamos criar o vetor do time
    let vetor = []
    cadastra(matriz,vetor) //cadastra 4 times
    consultaMediaPontos(matriz,vetor)
    consultaMaiorPontuacao(matriz, vetor    )
}
function cadastra(mat,vet){
    for(let i = 0;i<4;i++){
        let time = new Object()
        time.nome = prompt(`Informe o nome do time`)
        time.loc = prompt(`Informe a localizacao do time`)
        time.media = 0
        vet.push(time) //insere o objeto no vet
        mat[i] = []
        alert(`Informe as 4 notas do aluno ${time.nome}`)
        for(let j = 0;j<3;j++){ 
            mat[i][j] = Number(prompt(`Informe a pontuacao do time ${time.nome} no jogo ${j+1}`))
        }
    }
}
function consultaMediaPontos(mat,vet){
    for(let i = 0;i<4;i++){
        for(let j = 0;j<3;j++){
            //soma no vetor na posicao i
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media / 3
        console.log(`Media de pontiacao do time ${i+1} = ${vet[i].media}`)
    }
}
function consultaMaiorPontuacao(mat, vet){
    for(let j = 0;j<3;j++){ 
        let MaiorPont = mat[0][j]   //assumo que a maior nota e do primeiro time
        let NomeMaiorPont = vet[0].nome   //assumo que o primeiro time tem a maior pontuacao
        for(let i = 0;i<4;i++){
            if(mat[i][j] > MaiorPont){  //atualiza
                MaiorPont = mat[i][j]
                NomeMaiorPont = vet[i].nome
            }
        }
        console.log(`No jogo ${j+1} o time ${NomeMaiorPont} tem a maior pontuacao de ${MaiorPont} pontos`)
    }
}