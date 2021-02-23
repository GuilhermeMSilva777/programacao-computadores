var vetor = [1, 3, 7, 5, 9, 0, 4]

//reduce
//soma todos os elementos e retorna APENAS 1 VALOR
let soma = vetor.reduce((acumula, elemento) => {
    return acumula + elemento
})
console.log(soma) //29

//map
//soma 1 em cada valor do vetor
let x = vetor.map((elemento) => {
    return elemento + 1
})
console.log(x) //[2, 4, 8, 6, 10, 1, 5]












class Computador{
    constructor(nomeDono, marca, modelo, ram, hd){
        this.nomeDono = nomeDono
        this.marca = marca 
        this.modelo = modelo
        this.ram = ram 
        this.hd = hd 
    }
    upgradeRAM = (x) => {
        if (this.ram >= 0){
            this.ram += x
        }
        else {
            console.log('Não é possivel, não memoria RAM negativa !!!')
        }
    }
    downgradeRAM = (x) => {
        if (this.ram >= 0){
            if (this.ram - x >= 0){
                this.ram -= x
            }
            else {
                console.log('Não é possível deixar a memória RAM abaixo de zero')
            }
        }
        else {
            console.log('Não é possivel, não memoria RAM negativa !!!')
        }
    }
    upgradeHD = (x) => {
        if (this.hd >= 0){
            this.hd += x
        }
        else {
            console.log('Não é possivel, não existe HD negativo !!!')
        }
    }
    downgradeHD = (x) => {
        if (this.hd >= 0){
            if (this.hd - x >= 0){
                this.hd -= x
            }
            else {
                console.log('Não é possível deixar o HD abaixo de zero')
            }
        }
        else {
            console.log('Não é possivel, não existe HD negativo !!!')
        }
    }
    mostra = () => {
        console.log(`Dono: ${this.nomeDono}, Marca: ${this.marca}, Modelo: ${this.modelo}, Ram: ${this.ram} e Ram: ${this.hd}`)
    }
}
let pc1 = new Computador("Guilherme", "INTEL", "9400F",16, 1000)
pc1.downgradeRAM(4)
pc1.upgradeHD(500)
pc1.mostra()