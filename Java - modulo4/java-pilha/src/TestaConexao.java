
public class TestaConexao {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		try (Conexao con = new Conexao();) {
			con.leDados();

		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("Erro: " + e);
		}

	}

}
