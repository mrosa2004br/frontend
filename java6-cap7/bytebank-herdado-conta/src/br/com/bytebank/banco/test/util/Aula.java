package br.com.bytebank.banco.test.util;

public class Aula  implements Comparable<Aula>{

    private String titulo;
    private int tempo;

    public Aula(String titulo, int tempo) {
        this.titulo = titulo;
        this.tempo = tempo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getTempo() {
        return tempo;
    }

    public void setTempo(int tempo) {
        this.tempo = tempo;
    }

    public String toString() {
        return "[título: " + titulo + ", tempo: " + tempo + " minutos]";
    }

	@Override
	public int compareTo(Aula o) {
		// TODO Auto-generated method stub
		return  this.titulo.compareTo(o.titulo);
	}
}