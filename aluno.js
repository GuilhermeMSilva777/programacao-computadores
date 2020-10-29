//criando a classe aluno
class aluno {
    constructor(numero, nome, idade, p1, p2){
        this.numero = numero
        this.nome = nome
        this.idade = idade
        this.p1 = p1
        this.p2 = p2
    }

    notaFinal = () => {
        return (this.p1 + this.p2) / 2
    }

    mostra = () => {
        console.log(`Numero: ${this.numero}, Nome: ${this.nome}, Idade: ${this.idade}, Nota final: ${this.notaFinal()},`)
    }

    passou = () => {
        if(this.notaFinal() > 6){
            return `${this.nome} foi aprovado`
        }
        else {
            return `${this.nome} foi reprovado`
        }
    }
}

//criando objetos
let aluno1 = new aluno(111, "Lucas", 20, 6, 8)
aluno1.mostra()
console.log(aluno1.passou())

let a = Number(prompt(`Informe o numero do aluno 2`))
let b = prompt(`Informe o nome do aluno 2`)
let c = Number(prompt(`Informe a idade do aluno 2`))
let d = Number(prompt(`Informe a nota 1 do aluno 2`))
let e = Number(prompt(`Informe a nota 2 do aluno 2`))
let aluno2 = new aluno(a, b, c, d, e)
aluno2.mostra()
console.log(aluno2.passou())