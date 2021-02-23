class Rio {
    constructor(nome, nivel, poluido){
        this.nome = nome
        this.nivel = nivel
        this.poluido = poluido
    }

    chover = (x) => {
        this.nivel += x
    }
    ensolarar = (x) => {
        if(this.nivel - x >= 0){
            this.nivel -= x
        }
        else{
            console.log(`Impossivel deixar o nivel do rio abaixo de zero`)
        }
    }
    limpar = () => {
        this.poluido = false
    }
    sujar = () => {
        this.poluido = true
    }
    mostra = () => {
        let aux = this.poluido ? "Sujo" : "Limpo"
        console.log(`Nome : ${this.nome}, Nivel : ${this.nivel} e esta ${aux}`)
    }
}