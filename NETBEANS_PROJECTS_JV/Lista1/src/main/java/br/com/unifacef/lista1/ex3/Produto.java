
package br.com.unifacef.lista1.ex3;

public class Produto {
    int id;
    int qtde;
    String descricao;
    float preco;
    
    public Produto(){
    }
    
    public Produto(int id, int qtde, String descricao, float preco){
        this.id = id;
        this.qtde = qtde;
        this.descricao = descricao;     
        this.preco = preco;   
    }
    
    public void comprar(int x){
        this.qtde = this.qtde + x;
    }
    
    public void vender(int x){
        if (this.qtde - x >= 0){  
                this.qtde = this.qtde - x;
            }
            else {
                System.out.println("Impossivel, não possui essa quantidade no estoque! \n");
            }
    }
    
    public void subir(float x){
        this.preco = this.preco + x;
    } 
    
    public void descer(float x){
        if (this.preco - x >= 0){  
                this.preco = this.preco - x;
            }
            else {
                System.out.println("Impossivel, preço ficará negativo!");
            }
    }
    
    public String mostra(){
        return "Nome do produto : " + this.descricao + "\n ID : " + this.id + "\n Quantidade : " + this.qtde + "\n Valor : " + this.preco + "\n";
    }
    
}
