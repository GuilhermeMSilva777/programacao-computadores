function ex9(){
    var num = Number(prompt(`Digite um numero inteiro e positivo`))
    divisores(num)
}
function divisores(num){
    var result = 0
    for(var i=1; i<=num; i++){
        if(num % i == 0){
            result = result + i 
        }
    }
    console.log(`Soma dos divisores de N = ${result}`)
}
ex9()