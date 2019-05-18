package br.com.bytebanck.banco.modelo;

/** Classe Conta do projeto ByteBank
 * @author Marcos Rosa
 * @version 1.0
 */
public abstract class Conta {

    protected double saldo;
    private int agencia;
    private int numero;
    private Cliente titular;
    private static int total = 0;

   /**
    * Construtor para inicializar a Conta com agência e número. 
    * @param agencia
    * @param numero
    */
    public Conta(int agencia, int numero){
    	
    	if(agencia < 0) { 
    		throw new IllegalArgumentException("Erro: Número da Agencia Invalido ."); 	}
    	
        Conta.total++;
        //System.out.println("O total de contas Ã© " + Conta.total);
        this.agencia = agencia;
        this.numero = numero;
        //this.saldo = 100;
        //System.out.println("Estou criando uma conta " + this.numero);
    }

    public abstract void deposita(double valor) throws ContaException;

    public void saca(double valor) throws ContaException {
       
    	if(this.saldo <= valor) {
    		throw new ContaException("Não foi possivél efetuar a transação, \nSaldo insuficiente:" + this.saldo );
    	} 
    	
    	this.saldo -=  valor;
    	
    }

    public boolean transfere(double valor, Conta destino) throws ContaException {
      
    	this.saca(valor);
		
    	destino.deposita(valor);
		return true;
    	
    }

    public double getSaldo(){
        return this.saldo;
    }

    public int getNumero(){
        return this.numero;
    }

    public void setNumero(int numero){
        if(numero <= 0) {
            System.out.println("Nao pode valor menor igual a 0");
            return;
        }
        this.numero = numero;
    }

    public int getAgencia(){
        return this.agencia;
    }

    public void setAgencia(int agencia){
       if(agencia <= 0) {
           System.out.println("Nao pode valor menor igual a 0");
           return;
       }
       this.agencia = agencia;
    }

    public void setTitular(Cliente titular){
        this.titular = titular;
    }

    public Cliente getTitular(){
        return this.titular;
    }

    public static int getTotal(){
        return Conta.total;
    }

}