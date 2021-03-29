
package br.com.unifacef.lista4.ex0;

public class Assistente extends Funcionario {
    
    private float valeTransporte;

    public Assistente(){
        super(); // chama o construtor sem parâmetros da superclasse
    }

    public Assistente(float valeTransporte, String nome, String rg, float salario) {
        super(nome, rg, salario); // chama construtor com parâmetros da superclasse - reutilização de código
        this.setValeTransporte(valeTransporte);
    }
    
    public float getValeTransporte() {
        return valeTransporte;
    }

    public final void setValeTransporte(float valeTransporte) {
        this.valeTransporte = valeTransporte;
    }
    
    @Override // sobrescreveu ou anulou
    public String mostra() {
        return "Assistente{" + "valeTransporte=" + this.valeTransporte + super.mostra() + '}';
    }
}
