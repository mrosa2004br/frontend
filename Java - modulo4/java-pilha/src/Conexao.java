
public class Conexao implements AutoCloseable {

	public Conexao() {
		// TODO Auto-generated constructor stub
		System.out.println("Abrindo a conexão!");
		throw new IllegalStateException() ;
	}

	public void leDados() {
		System.out.println("Lendo os dados!...");
		// throw new IllegalStateException() ;
	}

	@Override
	public void close() {
		// TODO Auto-generated method stub
		System.out.println("Fechando a conexão.");
		
	}

}
