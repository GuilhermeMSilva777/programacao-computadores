
package br.com.unifacef.lista1.ex0;

import javax.swing.JOptionPane;

public class TestaCarro {

    public static void main(String[] args) {
        // Vamos criar os 3 objetos aqui
        Carro obj1 = new Carro();
        obj1.ano = 2018;
        obj1.marca = "Chevrolet";
        obj1.modelo = "Onix";
        obj1.motor = false;
        obj1.velAtual = 0;
        
        obj1.ligar();
        obj1.acelerar(60);
        // Vamos mostrar ao usuario
        obj1.mostra();
        obj1.mostraPane();
        
        // metodo construtor
        Carro obj2 = new Carro(2016,"Fiat","Palio",true,40);
        obj2.desligar();
        obj2.desacelerar(20);
        obj2.mostra();
        obj2.mostraPane();
        
        Carro obj3 = new Carro(2021, "Ferrari", "Sport 6", false, 0);
        obj3.ligar();
        obj3.acelerar(200);
        obj3.mostra();
        obj3.mostraPane();
        
    }
    
}
