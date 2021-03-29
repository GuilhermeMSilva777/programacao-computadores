
package br.com.unifacef.lista1.ex1;

public class TestaAluno {
    
    public static void main(String[] args) {
        Aluno obj1 = new Aluno(111,16,"Guilherme",3,5);
        System.out.println(obj1.dadosAluno());
        obj1.passou();
        
        //8.5f para transformar em FLOAT se nn da ERRO
        Aluno obj2 = new Aluno(222,16,"Joao",8.5f,4);
        System.out.println(obj2.dadosAluno());
        obj2.passou();
    }
    
}
