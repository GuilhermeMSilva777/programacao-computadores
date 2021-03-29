
package br.com.unifacef.lista1.ex3;

public class TestaProduto {

    public static void main(String[] args) {
        Produto obj1 = new Produto();
        obj1.id = 111;
        obj1.qtde = 50;
        obj1.descricao = "Bolacha";
        obj1.preco = 3.50f;
        
        System.out.println(obj1.mostra());
        obj1.comprar(10);
        obj1.descer(0.5f);
        System.out.println(obj1.mostra());
        
        Produto obj2 = new Produto(222,100,"Refrigerante",5f);
        System.out.println(obj2.mostra());
        obj2.vender(20);
        obj2.subir(1.5f);
        System.out.println(obj2.mostra());
    }
    
}
