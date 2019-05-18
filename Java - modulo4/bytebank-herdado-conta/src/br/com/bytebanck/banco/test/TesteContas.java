package br.com.bytebanck.banco.test;

import br.com.bytebanck.banco.modelo.ContaCorrente;
import br.com.bytebanck.banco.modelo.ContaException;
import br.com.bytebanck.banco.modelo.ContaPoupanca;
import br.com.bytebanck.banco.modelo.ContaSalario;

public class TesteContas {

	public static void main(String[] args) {
		ContaPoupanca cp = new ContaPoupanca(222, 222);
		cp.deposita(200.0);
		
		try (ContaCorrente cc = new ContaCorrente(111, 111);) {
			// TODO: handle exception
			cc.deposita(100.0);
			cc.transfere( 98.0, cp);
			System.out.println("CC: " + cc.getSaldo());
		}  catch (Exception Ex) {
			System.out.println("Excexão:" + Ex);
		}
		
		
		ContaSalario contaSalario = new ContaSalario(2222, 234567);
		try {
			contaSalario.deposita(100.00);
		} catch (ContaException ex) {
			// TODO Auto-generated catch block
			System.out.println("Excecão: " + ex);
			
		}
			
		System.out.println("CP: " + cp.getSaldo());
		System.out.println("Conta Salário: " + contaSalario.getSaldo());


	}

}
