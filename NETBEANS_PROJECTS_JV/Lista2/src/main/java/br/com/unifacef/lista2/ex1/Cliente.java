
package br.com.unifacef.lista2.ex1;

public class Cliente {
    private String numeroConta;
    private String numeroAgencia;
    private String nome;
    private float saldo; 
    
    public Cliente(){
        
    }
    
    public Cliente(String numeroConta, String numeroAgencia, String nome, float saldo){
        this.setNumeroConta(numeroConta);
        this.setNumeroAgencia(numeroAgencia);
        this.setNome(nome);     
        this.setSaldo(saldo);   
    }
    
    public final void setNumeroConta(String numeroConta){
                                                       //ou usar nroConta.indexOf("-") == 6
        if((numeroConta.length() == 8) && (numeroConta.charAt(6) == '-')){
            this.numeroConta = numeroConta;
        }else{
            System.out.println("Erro no tamanho do Nro da conta ou no digito verificador!!!");
        }
    }
    
    public final void setNumeroAgencia(String numeroAgencia){
                                                          //ou usar nroConta.indexOf("-") == 4
        if((numeroAgencia.length() == 6)&& (numeroAgencia.charAt(4) == '-')){
            this.numeroAgencia = numeroAgencia;
        }else{
            System.out.println("Erro no tamanho do Nro da agencia ou no digito verificador!!!");
        }
    }
    
    public final void setNome(String nome){
        if((nome.length() > 0 )&&(nome.length() <= 30)){
            this.nome = nome;
        }else{
            System.out.println("Nome deve ter menos que 30 caracteres!!!");
        }
    }
    
    public final void setSaldo(float saldo){
        if(saldo >= 0){
            this.saldo = saldo;
        }else{
            System.out.println("Valor de saldo negativo!!!");
        }
    }
    
    public void realizarDeposito(float x){
        this.setSaldo(this.saldo + x);
    }
    public void realizarSaque(float x){
        this.setSaldo(this.saldo - x);
    }
    
    public String getNumeroConta(){
        return this.numeroConta;
    }
    
    public String getNumeroAgencia(){
        return this.numeroAgencia;
    }
    
    public String getNome(){
        return this.nome;
    }
    
    public float getSaldo(){
        return this.saldo;
    }
    
    public void mostra(){
        System.out.println("Nro da conta : " + this.numeroConta + "\nNro da agencia : " + this.numeroAgencia + "\nNome : " + this.nome + "\nSaldo atual : " + this.saldo + "\n");
    }
}
