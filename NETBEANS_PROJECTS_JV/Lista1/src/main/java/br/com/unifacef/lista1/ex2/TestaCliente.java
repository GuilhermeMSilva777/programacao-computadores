
package br.com.unifacef.lista1.ex2;

public class TestaCliente {

    public static void main(String[] args) {
        //String name = JOptionPane.showInputDialog("Informe o nome : ");
        //Cliente obj1 = new Cliente(555,001, name ,3500);
            
        Cliente obj1 = new Cliente(555,001,"Fulano",3500);
        System.out.println(obj1.dadosCliente());
        obj1.realizarDeposito(500);
        obj1.realizarSaque(2000);
        
        //8.5f para transformar em FLOAT se nn da ERRO
        Cliente obj2 = new Cliente(444,002,"Beltrano",420);
        System.out.println(obj2.dadosCliente());
        obj2.realizarDeposito(80);
        obj2.realizarSaque(400);
        
        
        System.out.println("SALDO ATUALIZADO! \n");
        System.out.println(obj1.dadosCliente());
        System.out.println(obj2.dadosCliente());
    }
    
}
