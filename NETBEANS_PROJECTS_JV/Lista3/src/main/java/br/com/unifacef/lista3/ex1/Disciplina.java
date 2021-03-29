
package br.com.unifacef.lista3.ex1;

public class Disciplina {
    private String sigla;
    private int carga;
    //assiciacao
    private Professor professor; // Professor e a classe e professor e objeto

    public Disciplina() {
    }

    //isso eh um expemplu de agragacao pois o objeto professor ja vira criado de forma independente
    public Disciplina(String sigla, int carga, Professor professor) {
        this.setSigla(sigla);
        this.setCarga(carga);
        this.setProfessor(professor);
    }

    public String getSigla() {
        return sigla;
    }

    public final void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public int getCarga() {
        return carga;
    }

    public final void setCarga(int carga) {
        this.carga = carga;
    }

    public Professor getProfessor() {
        return professor;
    }

    public final void setProfessor(Professor professor) {
        this.professor = professor;
    }

    public String mostra() {
        return "Disciplina{" + "sigla=" + sigla + ", carga=" + carga + ", professor=" + professor.mostra() + '}';
    }
    
}
