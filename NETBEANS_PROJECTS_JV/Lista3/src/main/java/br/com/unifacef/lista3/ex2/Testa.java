
package br.com.unifacef.lista3.ex2;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Testa {

    // metodo main vai lancar uma excessao caso nn consiga converter este formato
    public static void main(String[] args) throws ParseException {
        Passageiro obj1 = new Passageiro("Guilherme", "123.456.789-10");
        Voo obj2 = new Voo(2, "Sao Paulo", "Italia");
        //reserva feita na data do sistema
        Reserva obj3 = new Reserva(777, new Date(), 750, obj1 ,obj2);
        System.out.println(obj3.mostra());
        
        // reserva feita na data 29/01/2022
        Passageiro obj4 = new Passageiro("Gustavo", "111.222.333-44");
        Voo obj5 = new Voo(5, "Sao Paulo", "Alemanha");
        //reserva feita na data do sistema
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");
        Date data = formato.parse("29/01/2022");
        Reserva obj6 = new Reserva(222, data, 1200, obj4 ,obj5);
        System.out.println(obj6.mostra());
    }
    
}
