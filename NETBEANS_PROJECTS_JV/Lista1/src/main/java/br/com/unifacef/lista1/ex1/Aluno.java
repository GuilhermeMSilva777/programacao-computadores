//Exercício 1: 
//•	Crie uma classe em Java chamada Aluno contendo as variáveis de instância numeroAluno (int), nome (String), idade (int), p1 (float) e p2 (float), 
//•	Crie os construtores 
//•	Crie os métodos notaFinal() - que calcula e retorna a média final do aluno - , e dadosAluno() - que retorna os valores de numeroAluno, nome e idade. 
//•	Criar uma classe TestaAluno com o método main() para instanciação da classe Aluno (atribuição das variáveis de instância com quaisquer valores e
//   chamada dos métodos notaFinal() e dadosAluno()).  
//•	Adicionar o método passou() à classe Aluno a fim de verificar se o aluno passou. Chame o método passou() na classe TestaAluno a fim de testa-lo.

package br.com.unifacef.lista1.ex1;

public class Aluno {
    //variaveis fortemente tipadas
    public int nroAluno, idade;
    public String nome;
    public float p1, p2;
    
    // na classe TestaAluno : Aluno obj1 = new Aluno()
    // construtor sem parametros
    public Aluno(){
    }
    
    public Aluno(int nroAluno, int idade, String nome, float p1, float p2){
        this.nroAluno = nroAluno;
        this.idade = idade;
        this.nome = nome;     
        this.p1 = p1;
        this.p2 = p2;
    }

    public float notaFinal(){
        return (this.p1 + this.p2) / 2;
    }
    //  método que retorna o valor
    //      System.out.println(obj1.dadosAluno())
    //      System.out.println(obj2.dadosAluno())
    //  método retorna a nota final
    //      Aluno obj1 = new Aluno(1, 20, "João", 4, 6)
    //      float aux = obj1.notaFinal()
    //      Aluno obj2 = new Aluno(2, 18, "Pedro", 8.5f, 6)
    //      float aux2 = obj2.notaFinal()
    
    // String é o tipo de retorno
    public String dadosAluno(){
        return "Nro do aluno : " + this.nroAluno + " Nome : " + this.nome + " Idade : " + this.idade;
    }
    
    // void pois o método não tem return
    public void passou(){
        float aux = this.notaFinal();
        if (aux >=6){
            System.out.println("Aprovado com média : " +aux );
        }else{
            System.out.println("Reprovado com média : " +aux );
        }
    }
    
    
}
