chefe()
function chefe(){
    // declarar a matriz 
    let matriz = [] // uma matriz é um vetor
    // vamos criar o vetor alunos
    let vetor = []
    cadastra(matriz,vetor) //cadastra 3 alunos
    consultaMediaAlunos(matriz,vetor)
    consultaMediaProvas(matriz)
    consultaMaiorNota(matriz, vetor)
}
function cadastra(mat,vet){
    for(let i = 0;i<3;i++){
        let objeto = new Object()
        objeto.nome = prompt(`Informe o nome do aluno`)
        objeto.rg = prompt(`Informe o RG do aluno`)
        objeto.media = 0
        vet.push(objeto) //insere o objeto no vet
        mat[i] = []
        alert(`Informe as 4 notas do aluno ${objeto.nome}`)
        for(let j = 0;j<4;j++){ 
            mat[i][j] = Number(prompt(`Infome a ${j+1}ª nota`))
        }
    }
}
function consultaMediaAlunos(mat,vet){
    for(let i = 0;i<3;i++){
        for(let j = 0;j<4;j++){
            //soma no vetor na posicao i
            vet[i].media = vet[i].media + mat[i][j]
        }
        //acabaram as notas do aluno i
        vet[i].media = vet[i].media / 4
        console.log(`Media do aluno ${i+1} = ${vet[i].media}`)
    }
}

function consultaMediaProvas(mat){
    for(let j = 0;j<4;j++){
        let media = 0
        for(let i = 0;i<3;i++){
            //soma cada prova
            media = media + mat[i][j]
        }
        console.log(`Media da prova ${j+1} = ${media/3}`)
    }
}
function consultaMaiorNota(mat, vet){
    for(let j = 0;j<4;j++){ 
        let MaiorNota = mat[0][j]   //assumo que a maior nota e do primeiro alnuo
        let NomeMaiorNota = vet[0].nome   //assumo que o primeiro aluno tem a maior nota
        for(let i = 0;i<3;i++){
            if(mat[i][j] > MaiorNota){  //atualiza
                MaiorNota = mat[i][j]
                NomeMaiorNota = vet[i].nome
            }
        }
        console.log(`Na prova ${j+1} o aluno ${NomeMaiorNota} tem a maior nota = ${MaiorNota}`)
    }
}