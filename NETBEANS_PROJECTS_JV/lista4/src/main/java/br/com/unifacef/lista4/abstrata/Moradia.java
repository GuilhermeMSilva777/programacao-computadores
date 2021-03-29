
package br.com.unifacef.lista4.abstrata;

public abstract class Moradia {
    protected String endereco, dono;

    public Moradia() {
    }

    public Moradia(String endereco, String dono) {
        this.setEndereco(endereco);
        this.setDono(dono);
    }

    public String getEndereco() {
        return endereco;
    }

    public final void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getDono() {
        return dono;
    }

    public final void setDono(String dono) {
        this.dono = dono;
    }

    public String mostra() {
        return "Moradia{" + "endereco=" + endereco + ", dono=" + dono + '}';
    }
    // esse metodo nao eh implementado
    // sera implementado obrigatoriamente nas filhas
    // isso vai permitir explorarmos o polimorfismo
    // caso não tenhamos o método na classe pai
    // não conseguiremos fazer polimorfismo
    public abstract String mensagemVenda();
}
