
package br.com.unifacef.lista3.ex2;

public class Voo {
    public int numero;
    public String origem,destino;

    public Voo() {
    }

    public Voo(int numero, String origem, String destino) {
        this.setNumero(numero);
        this.setOrigem(origem);
        this.setDestino(destino);
    }

    public int getNumero() {
        return numero;
    }

    public final void setNumero(int numero) {
        this.numero = numero;
    }

    public String getOrigem() {
        return origem;
    }

    public final void setOrigem(String origem) {
        this.origem = origem;
    }

    public String getDestino() {
        return destino;
    }

    public final void setDestino(String destino) {
        this.destino = destino;
    }

    public String mostra() {
        return "Voo{" + "numero=" + numero + ", origem=" + origem + ", destino=" + destino + '}';
    }
    
}
