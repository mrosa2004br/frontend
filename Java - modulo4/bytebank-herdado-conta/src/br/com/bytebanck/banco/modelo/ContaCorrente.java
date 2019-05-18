package br.com.bytebanck.banco.modelo;

public class ContaCorrente extends Conta implements Tributavel , AutoCloseable{
	
	public ContaCorrente(int agencia, int numero) {
		super(agencia, numero);
	}
	
	@Override
	public void saca(double valor) throws ContaException {
		double valorASacar = valor + 0.2;
		super.saca(valorASacar);
	}

	@Override
	public void deposita(double valor) {
        super.saldo += valor;
    }

	@Override
	public double getValorImposto() {	
		return super.saldo * 0.01;
	}

	@Override
	public void close() throws Exception {
		// TODO Auto-generated method stub
		System.out.println(" Conta fechada!");
		
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
	return "Conta Corrente: " + this.getNumero() + " Agencia: " + this.getAgencia() + " Titular: " + this.getTitular();
	}
}
