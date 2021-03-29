
package br.com.unifacef.lista4.abstrata;

public class Testa {

    public static void main(String[] args) {
        Moradia obj;
        
        obj = new Apto(2, true, "Centro", "Igor");
        System.out.println(obj.mensagemVenda()); // polimorfosmo
        
        obj = new Casa(30, true, "ZN", "Guilherme");
        System.out.println(obj.mensagemVenda()); // polimorfosmo
    }
    
}
