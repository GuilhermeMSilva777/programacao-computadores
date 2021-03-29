
package br.com.unifacef.lista3.ex1;

public class Testa {

    public static void main(String[] args) {
        Professor obj1 = new Professor("Carlao", "12345");
        
        Disciplina obj2 = new Disciplina("ES2", 76, obj1);
        
        System.out.println(obj2.mostra());
    }
    
}
