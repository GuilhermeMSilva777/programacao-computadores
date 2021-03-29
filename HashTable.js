    function HashTable() {
    var table = []

    var ValuePair = function(key, value) {
        this.key = key
        this.value = value  //  so pode receber 1 cara por vez
                            // FAZER NN SOBREESCREVER
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key)
        console.log(position + ' ' + key)
        table[position] = value
    }

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined
    }

    this.get = function(key) {
        return table[loseloseHashCode(key)]
    }

    var loseloseHashCode = function(key) {
        var hash = 0
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i) 
        }
        return hash % 37
    }

    this.print = function() {
        for(var i = 0; i < table.length; i++) {
            if(table[i] !== undefined) {
                console.log(i + ' : ' + table[i])
            }
        }
    }

    this.size = function() {
        return table.length
    }
}


var hashtable  = new HashTable()

hashtable.put("leandro", "leandro.borges@me.com")
hashtable.put("astolfo", "astolfo@uol.com.br")
hashtable.put("Livia", "livia@uol.com.br")
hashtable.put("Leandro", "leandro.borges@me.com")

hashtable.print();



//node HashTable.js
//node HashTable.js
//node HashTable.js


