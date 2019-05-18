package br.com.bytebanck.banco.modelo;

public class ContaSalario extends Conta {

	public ContaSalario(int agencia, int numero) {
		super(agencia, numero);
		// TODO Auto-generated constructor stub
	}
    @Override
	public void deposita(double valor) throws ContaException {
		// TODO Auto-generated method stub
		if(valor <= 0) {
			throw new ContaException("Valor do deposito não pode ser zero ou negativo:" + valor);
		}
		super.saldo += valor;

	}

}
