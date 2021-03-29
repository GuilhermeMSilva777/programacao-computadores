
package br.com.unifacef.lista2.ex2;

public class TestaAluno {

    public static void main(String[] args) {
        
        Aluno obj1 = new Aluno();
        obj1.setNumeroAluno(1);             //estao encapsuladas
        obj1.setNome("Guilherme");           //estao encapsuladas
        obj1.setIdade(18);              //estao encapsuladas
        obj1.setP2(8);                    //estao encapsuladas
        obj1.setP1(7);                    //estao encapsuladas
       
        obj1.dadosAluno();
        obj1.notaFinal();
        
        Aluno obj2 = new Aluno(2,"Gabriel",20, 4, 6);
        
        obj2.dadosAluno();
        obj2.notaFinal();
    }
    
}
