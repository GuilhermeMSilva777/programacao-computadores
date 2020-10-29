class produto {
    constructor(id, descricao, qtde, preco){
        this.id = id
        this.descricao = descricao
        this.qtde = qtde
        this.preco = preco
    }

    vender = (x) => {
        this.qtde = this.qtde + x
    }
    comprar = (x) => {
        if((this.qtde - x) >= 0){
            this.qtde = this.qtde - x
        }
        else{
            console.log(`Preco nao pode ser negativo`)
        }
    }
    aumentar = (x) => {
        this.preco += x
    }
    diminuir = (x) => {
        if(this.preco - x >= 0){
            this.preco = this.preco - x
        }
        else{
            console.log(`Preco nao pode ser negativo`)
        }
    }
    mostra = () => {
        console.log(`${this.descricao} tem ${this.qtde} com preco de R$ ${this.preco}`)
    }
}


let produto1 = new produto(1, "Alcool em gel", 10, 20)
produto1.comprar(10)
produto1.aumentar(2)
produto1.mostra()

let produto2 = new produto(2, "Mascara", 50, 5)
produto2.vender(5)
produto2.diminuir(4)
produto2.mostra()