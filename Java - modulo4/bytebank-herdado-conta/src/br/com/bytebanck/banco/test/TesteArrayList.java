package br.com.bytebanck.banco.test;


import java.util.ArrayList;
import java.util.List;

import br.com.bytebanck.banco.modelo.Conta;
import br.com.bytebanck.banco.modelo.ContaCorrente;

public class TesteArrayList {
    public static void main(String[] args) {

        List<Conta> lista = new ArrayList<Conta>();

        Conta cc = new ContaCorrente(22, 11);
        Conta cc2 = new ContaCorrente(22, 22);
        lista.add(cc);
        lista.add(cc2);

        System.out.println("----------");
        
        if(lista.contains(cc2)) {
        	System.out.println("Contém....");
        }

        for(Conta conta : lista) {
            System.out.println(conta);
        }

    }
}