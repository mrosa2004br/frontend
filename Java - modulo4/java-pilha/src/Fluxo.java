public class Fluxo {

    public static void main(String[] args) {

    	System.out.println("Ini do main");
    	try {
    		metodo1();
			
		} catch (Exception err) {
			// TODO: handle exception
			String msg = err.getMessage();
			System.out.println("Exception :" + msg);
			err.printStackTrace();
		}
        System.out.println("Fim do main");
    }

    private static void metodo1() throws MinhaException {

    	System.out.println("Ini do metodo1");
       	metodo2();
        System.out.println("Fim do metodo1");
    }

    private static void metodo2() throws MinhaException {
        
    	System.out.println("Ini do metodo2");
    	
       /* for(int i = 1; i <= 5; i++) {
        	System.out.println(i);
        	//int a = 1 / 0;
        }*/
    	
    	throw new MinhaException("Deu ruim ...");
        // System.out.println("Fim do metodo2");
    }
}