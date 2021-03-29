//Exercício 2:
//•	Crie uma classe em Java chamada Cliente contendo as variáveis de instância numeroConta (int), numeroAgencia (int), nome (String) e saldo (float), 
//•	Crie os construtores 
//•	Crie os métodos public  realizarDeposito() e realizarSaque() que, realizam depósito e saque, respectivamente, na conta do cliente. 
//•	Crie um outro método public que retorna o numero da conta, nome do cliente e saldo atual. 
//•	Criar uma classe TestaCliente para instanciação da classe Cliente como Fulano. Chamar os métodos realizarDeposito() e
//    realizarSaque() nessa classe para que o saldo seja modificado  
//•	Criar, também na classe TestaCliente, um outro cliente (Beltrano) e realizar as mesmas atividades do Fulano.

package br.com.unifacef.lista1.ex2;

public class Cliente {
    int numeroConta;
    int numeroAgencia;
    String nome;
    float saldo;
    
    public Cliente(){
    }
    
    public Cliente(int numeroConta, int numeroAgencia, String nome, float saldo){
        this.numeroConta = numeroConta;
        this.numeroAgencia = numeroAgencia;
        this.nome = nome;     
        this.saldo = saldo;   
    }
    
    public void realizarDeposito(float x){
        this.saldo = this.saldo + x;
    }
    
    public void realizarSaque(float x){
        if (this.saldo - x >= 0){  
                this.saldo = this.saldo - x;
            }
            else {
                System.out.println("Impossivel, saldo ficara negativo!");
            }
    }
    
    public String dadosCliente(){
        return "Nro da conta : " + this.numeroConta + "\n Nome : " + this.nome + "\n Saldo atual : " + this.saldo + "\n";
    }
}
