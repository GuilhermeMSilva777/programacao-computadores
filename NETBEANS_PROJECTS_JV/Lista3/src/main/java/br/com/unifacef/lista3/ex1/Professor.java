
package br.com.unifacef.lista3.ex1;

public class Professor {
    private String nome, rg;

    public Professor() {
    }

    public Professor(String nome, String rg) {
        this.setNome(nome);
        this.setRg(rg);
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

    public String mostra() {
        return "Professor{" + "nome=" + nome + ", rg=" + rg + '}';
    }
    
    
}
