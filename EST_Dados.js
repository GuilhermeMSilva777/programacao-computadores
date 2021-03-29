//enqueue == empilhar
//dequeue == desempilhar
//front = primeiro da fila 
//isEmpty = mostra se eh vazio (yes/no)
//size = mostra 0 tamanho 
//print = mostra os valores


function Queue() {
    var items = []

    this.enqueue = function(element) {
        items.push(element)
    }

    this.dequeue = function() {
        return items.shift()
    }

    this.front = function() {
        return items[0]
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.size = function() {
        return items.length
    }

    this.print = function() {
        console.log(items.toString())
    }
}

//TESTE DO PROGRAMA
var fila = new Queue()

fila.enqueue(1)
fila.enqueue(2)
fila.enqueue(3)

fila.print()

fila.dequeue()

fila.print()
console.log(fila.front())
console.log(fila.size())
console.log(fila.isEmpty())

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Pilha() {
    var items = []

    this.empilha = function(element) {
        items.push(element)
    }

    this.desempilha = function() {
        return items.pop()
    }

    this.front = function() {
        return items[0]
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.size = function() {
        return items.length
    }

    this.print = function() {
        console.log(items.toString())
    }
}

//TESTE DO PROGRAMA
var pilha = new Pilha()

pilha.empilha(1)
pilha.empilha(2)
pilha.empilha(3)
pilha.empilha(4)

pilha.print()

pilha.desempilha()

pilha.print()
pilha.desempilha()
pilha.desempilha()

pilha.print()
console.log(pilha.front())
console.log(pilha.size())
console.log(pilha.isEmpty())

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

