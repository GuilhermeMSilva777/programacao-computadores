
package br.com.unifacef.lista1.ex4;

public class Rio {
    String nome;
    float nivel;
    boolean poluido;
    
    public Rio(){
    }
    
    public Rio(String nome, float nivel, boolean poluido){
        this.nome = nome;
        this.nivel = nivel;
        this.poluido = poluido;        
    }
    
    public void chover(float x){
        this.nivel = this.nivel + x;
    }
    
    public void ensolarar(float x){
        if (this.nivel - x >= 0){  
                this.nivel = this.nivel - x;
            }
            else {
                System.out.println("Impossivel, nivel ficara negativo! \n");
            }
    }
    
    public void limpar(){
        if (this.poluido == false){
               this.poluido = true;
           }
           else {
            System.out.println("Impossivel, rio ja esta limpo");
           }
    } 
    
    public void sujar(){
        if (this.poluido == true){
               this.poluido = false;
           }
           else {
            System.out.println("Impossivel, rio ja esta sujo");
           }
    }
    
    public String mostra(){
        return " Nome do rio : " + this.nome + "\n Nivel : " + this.nivel + "\n Puluido : " + (this.poluido ? "Sim" : "Não") + "\n";
    }
}
