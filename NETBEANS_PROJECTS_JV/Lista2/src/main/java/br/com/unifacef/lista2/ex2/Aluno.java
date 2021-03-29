
package br.com.unifacef.lista2.ex2;

public class Aluno {
    private int numeroAluno;
    private String nome;
    private int idade;
    private float p1;
    private float p2;
    
    public Aluno(){
        
    }
    
    public Aluno(int numeroAluno, String nome, int idade, float p1, float p2){
        this.setNumeroAluno(numeroAluno);
        this.setNome(nome);
        this.setIdade(idade);     
        this.setP1(p1);   
        this.setP2(p2); 
    }
    
    public final void setNumeroAluno(int numeroAluno){
        //if(numeroAluno.length() == 6){
            this.numeroAluno = numeroAluno;
        //}else{
            //System.out.println("Numero deve ter 6 numeros!!!");
        //}
    }
    
    public final void setNome(String nome){
        if((nome.length() > 0 )&&(nome.length() <= 30)){
            this.nome = nome;
        }else{
            System.out.println("Nome deve ter menos que 30 caracteres!!!");
        }
    }
        
    public final void setIdade(int idade){
        if(idade > 0){
            this.idade = idade;
        }else{
            System.out.println("Idade nao pode ser negativa!!!");
        }
    }
    
    public final void setP1(float p1){
        if(p1 > 0){
            this.p1 = p1;
        }else{
            System.out.println("A nota nao pode ser negativa!!!");
        }
    }
    
    public final void setP2(float p2){
        if(p2 > 0){
            this.p2 = p2;
        }else{
            System.out.println("A nota nao pode ser negativa!!!");
        }
    }
    
    public void notaFinal(){
        if(((p1 + p2)/2 >= 0) && ((p1 + p2)/2 <= 10)){
            System.out.println(" Nota final : " + (p1 + p2)/2);
        }
    }

    
    public int getNumeroAluno(){
        return this.numeroAluno;
    }
    
    public String getNome(){
        return this.nome;
    }
    
    public int getIdade(){
        return this.idade;
    }
    
    public float getP1(){
        return this.p1;
    }
    
    public float getP2(){
        return this.p2;
    }
    
    public void dadosAluno(){
        System.out.println("Nro aluno : " + this.numeroAluno + "\nNome : " + this.nome + "\nIdade : " + this.idade + "\n");
    }
}
