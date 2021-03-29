
package br.com.unifacef.lista2.ex0;

public class Paciente {
    private String nome;            //encapsulando
    private int idade;              //encapsulando
    private float peso, altura;     //encapsulando
    
    public Paciente(){
        
    }
    
    public Paciente(String nome, int idade, float peso, float altura){
        this.setNome(nome);
        this.setIdade(idade);
        this.setPeso(peso);     
        this.setAltura(altura);   
    }
    // final - as classes filhas nao podem sobrescrever esses metodos
    public final void setNome(String nome){
        this.nome = nome;
    }
    // final - as classes filhas nao podem sobrescrever esses metodos
    public final void setIdade(int idade){
        if((idade>=0)&&(idade<=130)){
            this.idade = idade;
        }else{
            System.out.println("Idade invalida!!!!");
        }
    }
    // final - as classes filhas nao podem sobrescrever esses metodos
    public final void setPeso(float peso){
        if((peso>0)&&(peso<=200)){
            this.peso = peso;
        }else{
            System.out.println("Peso invalido!!!!");
        }
    }
    // final - as classes filhas nao podem sobrescrever esses metodos
    public final void setAltura(float altura){
        if((altura>0)&&(altura<=2.5f)){
            this.altura = altura;
        }else{
            System.out.println("Altura invalida!!!!");
        }
    }
    
    public String getNome(){
        return this.nome;
    }
    
    public int getIdade(){
        return this.idade;
    }
    
    public float getPeso(){
        return this.peso;
    }
    
    public float getAltura(){
        return this.altura;
    }
}
