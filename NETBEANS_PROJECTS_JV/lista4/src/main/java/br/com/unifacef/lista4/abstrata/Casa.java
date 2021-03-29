
package br.com.unifacef.lista4.abstrata;

public class Casa extends Moradia {
    private float tamJardim;
    private boolean piscina;

    public Casa() {
        super();
    }
    public Casa(float tamJardim, boolean piscina, String endereco, String dono) {
        super(endereco, dono);
        this.setTamJardim(tamJardim);
        this.setPiscina(piscina);
    }
    public float getTamJardim() {
        return tamJardim;
    }
    public final void setTamJardim(float tamJardim) {
        this.tamJardim = tamJardim;
    }
    public boolean isPiscina() {
        return piscina;
    }
    public final void setPiscina(boolean piscina) {
        this.piscina = piscina;
    }
    @Override
    public String mostra() {
        return "Casa{" + "tamJardim=" + tamJardim + ", piscina=" + piscina + super.mostra() + '}';
    }
    @Override
    public String mensagemVenda(){
        return "Casa vendida com sucesso !!";
    }
}
