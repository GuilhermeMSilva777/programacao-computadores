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
console.log(fila.size())

fila.dequeue()

fila.print()
console.log(fila.size())