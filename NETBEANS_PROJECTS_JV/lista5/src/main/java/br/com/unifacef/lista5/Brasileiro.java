
package br.com.unifacef.lista5;

//implements - herdamos comportamento
public class Brasileiro implements ICidadao, IEleitor{

    @Override
    public String pagaIr() {
        return "O percentual de pagamento é de acordo com o salario";
    }

    @Override
    public String tiraId() {
        return "Obter um numero de RG ou CPF";
    }

    @Override
    public String vota() {
        return "Acessar urna eletronica";
    }

    @Override
    public String consultaLocalVotacao() {
        return "Escola publica perto do bairro";
    }
    
}
