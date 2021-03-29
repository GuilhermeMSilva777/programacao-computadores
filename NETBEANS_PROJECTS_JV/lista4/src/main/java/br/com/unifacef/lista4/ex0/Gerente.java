
package br.com.unifacef.lista4.ex0;

public class Gerente extends Funcionario {
    private float bonus;

    public Gerente() {
        super();
    }

    public Gerente(float bonus, String nome, String rg, float salario) {
        super(nome, rg, salario);
        this.setBonus(bonus);
    }

    public float getBonus() {
        return bonus;
    }

    public final void setBonus(float bonus) {
        this.bonus = bonus;
    }

    // pq mostra precisou ser anulado ?? pq nn servia, era insuficiente 
    @Override
    public String mostra() {
        return "Gerente{" + "bonus=" + this.bonus + super.mostra() + '}';
    }
    
    
    
}
