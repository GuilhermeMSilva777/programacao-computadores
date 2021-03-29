
package br.com.unifacef.lista4.abstrata;

public class Apto extends Moradia {
    private int andar;
    private boolean varanda;

    public Apto() {
        super();
    }
    public Apto(int andar, boolean varanda, String endereco, String dono) {
        super(endereco, dono);
        this.setAndar(andar);
        this.setVaranda(varanda);
    }
    public int getAndar() {
        return andar;
    }
    public final void setAndar(int andar) {
        this.andar = andar;
    }
    public boolean isVaranda() {
        return varanda;
    }
    public final void setVaranda(boolean varanda) {
        this.varanda = varanda;
    }
    @Override
    public String mostra() {
        return "Apto{" + "andar=" + andar + ", varanda=" + varanda + super.mostra() + '}';
    }
    @Override
    public String mensagemVenda(){
        return "Apartamento vendido com sucesso !!";
    }
}
