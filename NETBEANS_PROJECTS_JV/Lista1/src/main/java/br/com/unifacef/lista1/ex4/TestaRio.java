
package br.com.unifacef.lista1.ex4;

public class TestaRio {

    public static void main(String[] args) {
        Rio obj1 = new Rio();
        obj1.nome = "Amazonas";
        obj1.nivel = 4;
        obj1.poluido = true;
        
        System.out.println(obj1.mostra());
        obj1.chover(2);
        obj1.sujar();
        System.out.println(obj1.mostra());
        
        Rio obj2 = new Rio("São Francisco",5, false);
        System.out.println(obj2.mostra());
        obj2.ensolarar(2);
        obj2.limpar();
        System.out.println(obj2.mostra());
        
    }
    
}
