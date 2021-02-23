// VAMOS PROGRAMAR ORIENTADO A OBJETOS

//CRIANDO UMA CLASSE CHAMADA VEICULO
class veiculo{

    //METODO CRONSTRUCTOR - COM PARAMETROS
    constructor(marca, modelo, ano, motor, velocidade){
        this.marca = marca      //THIS REPRESENTA O OBJETO SENDO CRIADO
        this.modelo  = modelo
        this.ano = ano
        this.motor = motor
        this.velocidade = velocidade
    }

    mostra(){
        let status = (this.motor) ? "Ligado" : "Desligado"
        console.log(`Marca: ${this.marca} e modelo: ${this.modelo} e Ano: ${this.ano} e Status: ${status} e Vel: ${this.velocidade}`)
    }

    //LIGAR O CARRO
    ligar = () => {
        this.motor= true
    }
    //DESLIGAR O CARRO
    desligar = () => {
        this.motor= false
    }
    //AUMENTAR A VELOCIDADE EM X
    acelerar = (x) => {
        this.velocidade = this.velocidade + x
    }
    //DIMINUIR A VELOCIDADE EM X
    freiar = (x) => {
        this.velocidade = this.velocidade - x
    }
}

//CRIA UM OBJETO DA CLASSE VEICULO
let objeto1 = new veiculo("GM", "Onix", 2012, false, 0) //THIS REPRESENTA OBJETO1
objeto1.ligar()
objeto1.acelerar(80)
objeto1.freiar(20)
objeto1.mostra()

//CRIA OUTRO OBJETO DA CLASSE VEICULO
let objeto2 = new veiculo("Fiat", "Palio", 2020, false, 0) //THIS REPRESENTA OBJETO2
objeto2.ligar()
objeto2.acelerar(100)
objeto2.freiar(10)
objeto2.mostra()

let objeto3 = new veiculo("Ford", "Focus", 2002, false, 0) //THIS REPRESENTA OBJETO3
objeto3.ligar()
objeto3.acelerar(90)
objeto3.freiar(10)
objeto3.mostra()