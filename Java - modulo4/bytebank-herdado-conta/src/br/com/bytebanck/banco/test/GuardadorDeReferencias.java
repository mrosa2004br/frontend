package br.com.bytebanck.banco.test;
public class GuardadorDeReferencias {

	private Object[] referencias;
	private int posicaoLivre;
	
	public GuardadorDeReferencias() {

		referencias = new Object[10];
		this.posicaoLivre = 0;
	
	}

	public void adciona(Object ref) {
		referencias[this.posicaoLivre] = ref;
		this.posicaoLivre++;
			
	}

	public int getQuantidadeElementos() {
		return this.posicaoLivre;
	}

	public Object getReferencia(int pos) {
		// TODO Auto-generated method stub
		return this.referencias[pos];
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
		//return 
		
	}
	
	
}
