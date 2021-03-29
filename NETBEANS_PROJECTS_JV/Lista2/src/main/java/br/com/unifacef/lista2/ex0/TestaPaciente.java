
package br.com.unifacef.lista2.ex0;

public class TestaPaciente {

    public static void main(String[] args) {
        Paciente obj1 = new Paciente();
        obj1.setNome("Guilherme");    //estao encapsuladas
        obj1.setIdade(19);            //estao encapsuladas
        obj1.setPeso(72);             //estao encapsuladas
        obj1.setAltura(1.8f);         //estao encapsuladas
        
        System.out.println("Obj1 : Nome : " + obj1.getNome() + "\n Idade : " + obj1.getIdade() + "\n Peso : " + obj1.getPeso() + "\n Altura : " + obj1.getAltura() + "\n");
        
        Paciente obj2 = new Paciente("Alex",22,83,1.4f);
        
        System.out.println("Obj2 : Nome : " + obj2.getNome() + "\n Idade : " + obj2.getIdade() + "\n Peso : " + obj2.getPeso() + "\n Altura : " + obj2.getAltura() + "\n");
    }
    
}
