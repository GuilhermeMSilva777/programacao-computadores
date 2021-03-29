
package br.com.unifacef.lista4.ex0;

public class Funcionario {
    // visibilidade protegida
    // permite que as classes filhas herdem estas variáveis
    protected String nome,rg;
    protected float salario;

    public Funcionario() {
    }

    public Funcionario(String nome, String rg, float salario) {
        this.setNome(nome);
        this.setRg(rg);
        this.setSalario(salario);
    }

    public String getNome() {
        return nome;
    }

    public final void setNome(String nome) {
        this.nome = nome;
    }

    public String getRg() {
        return rg;
    }

    public final void setRg(String rg) {
        this.rg = rg;
    }

    public float getSalario() {
        return salario;
    }

    public final void setSalario(float salario) {
        this.salario = salario;
    }

    public String mostra() {
        return "Funcionario{" + "nome=" + nome + ", rg=" + rg + ", salario=" + salario + '}';
    }
    
    
}
