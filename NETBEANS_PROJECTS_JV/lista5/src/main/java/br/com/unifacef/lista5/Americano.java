
package br.com.unifacef.lista5;

public class Americano implements ICidadao, IEleitor {

    @Override
    public String pagaIr() {
        return "Todo mundo paga muito mas o servico eh bom";
    }

    @Override
    public String tiraId() {
        return "Obter uma social security";
    }

    @Override
    public String vota() {
        return "Papel e caneta";
    }

    @Override
    public String consultaLocalVotacao() {
        return "Separado por idade";
    }
    
}
