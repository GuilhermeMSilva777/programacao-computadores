function ex7(){
    var soma = 0
    var i = 0
    do{
        var num = Number(prompt(`Digite um numero positivo para continuar ou um negativo para finalizar`))
        if (num >= 0){
            soma = soma + num
            i++
        }
    }
    while(num >= 0)
    media(soma,i)
}
function media(soma,i){
    var result = soma / i
    console.log(`Media dos possitivos = ${result}`)
}
ex7()
