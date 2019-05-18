package br.com.bytebanck.banco.test;
import java.util.Scanner;

public class TestHackerHank2 {
	
	public static void main(String[] args) {
		
        Scanner sc=new Scanner(System.in);
        System.out.println("================================");
        for(int i=0;i<3;i++){
            String s1=sc.next();
            int x=sc.nextInt();
            //Complete this line
            
            System.out.println(String.format("%1$-15s", s1) + String.format("%03d", x));
        }
        System.out.println("================================");

}
}
