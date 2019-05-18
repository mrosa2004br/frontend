package br.com.bytebanck.banco.test;

public class TestArrays {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] idades = new int[5];
		String[] emails = new String[3];
		
		for (int i = 0; i < idades.length; i++) {

			idades[i] = i * i;
			System.out.println(idades[i]);

		}
		
	}

}
