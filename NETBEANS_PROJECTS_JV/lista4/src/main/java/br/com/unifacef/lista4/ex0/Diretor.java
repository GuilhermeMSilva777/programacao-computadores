
package br.com.unifacef.lista4.ex0;

public class Diretor extends Funcionario{
    private float carro;
    
    public Diretor(){
        super();
    }

    public Diretor(float carro, String nome, String rg, float salario) {
        super(nome, rg, salario);
        this.setCarro(carro);
    }

    public float getCarro() {
        return carro;
    }

    public final void setCarro(float carro) {
        this.carro = carro;
    }

    @Override
    public String mostra() {
        return "Diretor{" + "carro=" + this.carro + super.mostra() + '}';
    }
    
    
}
