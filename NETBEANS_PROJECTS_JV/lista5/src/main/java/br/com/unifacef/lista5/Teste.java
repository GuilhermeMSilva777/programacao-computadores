
package br.com.unifacef.lista5;

public class Teste {

    public static void main(String[] args) {
        Brasileiro obj1 = new Brasileiro();
        System.out.println(obj1.pagaIr());
        System.out.println(obj1.tiraId());
        System.out.println(obj1.vota());
        System.out.println(obj1.consultaLocalVotacao());
                
        Americano obj2 = new Americano();
        System.out.println(obj2.pagaIr());
        System.out.println(obj2.tiraId());
        System.out.println(obj2.vota());
        System.out.println(obj2.consultaLocalVotacao());
                
        Alemao obj3 = new Alemao();
        System.out.println(obj3.pagaIr());
        System.out.println(obj3.tiraId());
        System.out.println(obj3.vota());
        System.out.println(obj3.consultaLocalVotacao());
        
    }
    
}
