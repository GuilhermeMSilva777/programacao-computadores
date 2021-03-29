
package br.com.unifacef.lista1.ex0;
// Serve apenas de modelo

import javax.swing.JOptionPane;

public class Carro {
    // Declaração das variáveis
    // Java possui tipagem estática, é forte
    String marca;    // String é uma classe (maiusculo)
    String modelo;   // String é uma classe (maiusculo)
    int ano;         // int é um tipo primitivo (minusculo)
    boolean motor;   // boolean é um tipo primitivo (minusculo)
    float velAtual;  // float é um tipo primitivo (minusculo)
    
    // metodo construtor
    public Carro(int ano, String marca, String modelo, boolean motor, float velAtual){
        this.ano = ano;
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.velAtual = velAtual;
    }
    public Carro(){
        
    }
    public void mostra(){
           System.out.println(" Ano: " + this.ano + " Marca: " + this.marca + " Modelo: " + this.modelo + " Motor: " + this.motor + " Velocidade: " + this.velAtual);
    } 
    public void mostraPane(){
           JOptionPane. showMessageDialog(null, " Ano: " + this.ano + " Marca: " + this.marca + " Modelo: " + this.modelo + " Motor: " + this.motor + " Velocidade: " + this.velAtual);
    } 
    public void ligar(){
           if (this.motor == false){
               this.motor = true;
           }
           else {
            System.out.println("Impossivel, motor ja esta ligado");
           }
    }
    public void desligar(){
           if (this.motor == true){
               this.motor = false;
               this.velAtual = 0;
           }
           else {
            System.out.println("Impossivel, motor ja esta desligado");
           }
    }
    public void acelerar(float x){
           if (this.motor == true){  
            this.velAtual = this.velAtual + x;
           }
           else {
            System.out.println("Impossivel, motor desligado");
           }
    }
    public void desacelerar(float x){
        if (this.motor){
            if (this.velAtual - x >= 0){  
              this.velAtual = this.velAtual - x;
            }
            else {
                    System.out.println("Impossivel, velcidade ficara abaixo de zero!");
            }
        }
        else {
            System.out.println("Impossivel, motor desligado");
        }
    }
}
