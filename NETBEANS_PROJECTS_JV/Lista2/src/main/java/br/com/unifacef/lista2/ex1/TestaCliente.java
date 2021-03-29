
package br.com.unifacef.lista2.ex1;

public class TestaCliente {

    public static void main(String[] args) {
        
        Cliente obj1 = new Cliente();
        obj1.setNumeroConta("111111-1");             //estao encapsuladas
        obj1.setNumeroAgencia("0000-1");           //estao encapsuladas
        obj1.setNome("Guilherme");              //estao encapsuladas
        obj1.setSaldo(1500);                    //estao encapsuladas
        
        obj1.realizarDeposito(500);
        obj1.realizarSaque(1200);
        obj1.mostra();
        
        Cliente obj2 = new Cliente("222222-2","0000-2","Gabriel",300);
        
        obj2.realizarDeposito(400);
        obj2.realizarSaque(200);
        obj2.realizarSaque(300);
        obj2.mostra();
    }
    
}
