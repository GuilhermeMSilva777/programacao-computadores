
package br.com.unifacef.lista3.ex2;

import java.util.Date;

public class Reserva {
    private int codigo;
    private Date data;
    private float valor;
    
    // associacao com passageiro
    private Passageiro passageiro; //objeto parte
    // associacao com voo
    private Voo voo; //objeto parte
    // AGREGACAO - passageiro ja veio criado, ele e independente
    // AGREGACAO - voo ja veio criado, ele e independente
    public Reserva() {
        this.passageiro = new Passageiro(); // evito erro de null pointer
        this.voo = new Voo(); // evito erro de acesso a espaco na memoria inexistente
    }

    public Reserva(int codigo, Date data, float valor, Passageiro passageiro, Voo voo) {
        this.codigo = codigo;
        this.data = data;
        this.valor = valor;
        this.passageiro = passageiro;
        this.voo = voo;
    }
    
    public int getCodigo() {
        return codigo;
    }

    public final void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public Date getData() {
        return data;
    }

    public final void setData(Date data) {
        this.data = data;
    }

    public float getValor() {
        return valor;
    }

    public final void setValor(float valor) {
        this.valor = valor;
    }

    public Passageiro getPassageiro() {
        return passageiro;
    }

    public final void setPassageiro(Passageiro passageiro) {
        this.passageiro = passageiro;
    }

    public Voo getVoo() {
        return voo;
    }

    public final void setVoo(Voo voo) {
        this.voo = voo;
    }

    public String mostra() {
        return "Reserva{" + "codigo=" + codigo + ", data=" + data + ", valor=" + valor + ", \n passageiro=\n" + passageiro.mostra() + ", \n voo=\n" + voo.mostra() + '}';
    }
    
}
