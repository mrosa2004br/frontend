
public class Programa {

	public static void main(String[] args) {
		
		int tabuada = 1;
		
		while(tabuada <= 10) {
			
			System.out.println("Tabuada do :" + tabuada );
			
			for(int multiplicador = 0; multiplicador <= 10; multiplicador++) {
				
				System.out.println(tabuada + " * " + multiplicador + " = " + ( tabuada * multiplicador));
				
			}
			
			tabuada++;		
			System.out.println();
		}

	}

}
