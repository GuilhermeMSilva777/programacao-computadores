
package br.com.unifacef.lista3.ex3;

public class Carrinho {
    private int codigo;
    private float valorFinal;
    private ItemCarrinho item;

    public Carrinho(int codigo, float valorFinal, String descricao, int qtde, float valor) {
        this.codigo = codigo;
        this.valorFinal = valorFinal;
        this.item = new ItemCarrinho(descricao, qtde, valor);
    }
    
    
    
}