
package br.com.unifacef.lista5;

public class Alemao implements ICidadao, IEleitor {

    @Override
    public String pagaIr() {
        return "Todo mundo paga 50% do salario";
    }

    @Override
    public String tiraId() {
        return "Driver licence";
    }

    @Override
    public String vota() {
        return "Papel e caneta";
    }

    @Override
    public String consultaLocalVotacao() {
        return "Baseado na altura e peso";
    }
    
}
