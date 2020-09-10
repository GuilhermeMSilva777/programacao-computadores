chefe()
function chefe(){
    // declarar a matriz 
    let matriz = [] // uma matriz é um vetor
    //matriz de 3 linhas
    matriz[0] = [] // cada linha da matriz é uma matriz
    matriz[1] = []
    matriz[2] = []
    cadastra(matriz) //cadastra 3 alunos
    consultaMediaAlunos(matriz)
}
function cadastra(mat){
    for(let i = 0;i<3;i++){
        alert(`Informe 4 notas do aluno ${i+1}`)
        for(let j = 0;j<4;j++){
            mat[i][j] = Number(prompt(`Infome a ${j+1}ª nota`))
        }
    }
}
function consultaMediaAlunos(mat){
    let medias = [0,0,0]
    for(let i = 0;i<3;i++){
        for(let j = 0;j<4;j++){
            //soma no vetor na posicao i
            medias[i] = medias[i] + mat[i][j]
        }
        //acabaram as notas do aluno i
        medias[i] = medias[i] / 4
        console.log(`Media do aluno ${i+1} = ${medias[i]}`)
    }
}