

package br.com.unifacef.lista4.ex0;

import java.util.ArrayList;

public class Testa {
    public static void polimorfismo(Funcionario obj1){
        // o objeto obj vai chamar o metodo mostra() de qual classe ?
        // - uma das classes que for passada como parametro --- DEPENDE
        System.out.println(obj1.mostra());
    }
    
    public static void main(String[] args) {
       Assistente obj1 = new Assistente(200, "Bolela", "11.111.111-1", 2500);
       
       polimorfismo(obj1); // obj = obj1
       
       Gerente obj2 = new Gerente(2000, "Pedro", "22.222.222-2", 2000);
       
       polimorfismo(obj2); // obj = obj2
       
       Diretor obj3 = new Diretor(30000, "Laila", "33.333.333-3", 3000);
       
       polimorfismo(obj3); // obj = obj3
       
       //vamos criar um vetor do tipo Funcionarios
       ArrayList<Funcionario> vetor = new ArrayList();
       vetor.add(obj1);
       vetor.add(obj2);
       vetor.add(obj3);
       
       //vamos mostrar os dados de cada funcionario
       for(Funcionario obj: vetor){
           //chama o metodo polimorfimo para cada obj
           polimorfismo(obj);
       }
    }
    
}
