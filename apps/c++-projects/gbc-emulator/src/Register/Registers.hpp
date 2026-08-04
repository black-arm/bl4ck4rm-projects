#include <iostream>

class Registers {

    private: 
        // accumulator and flags
        /*
            the flag register: 
            - Zero Flag (7 Bit): questo bit è impostato quando il risultato di una operazione matematica è zero o 2 valori match usando il comando CP
            - Substract Flag (6 Bit): bit impostato quando l'ultima operazione è una sottrazione
            - Half carry flag (5 Bit): Questo bit viene impostato se si è verificato un riporto dal nibble inferiore nell'ultima operazione matematica
            - Carry flag (4 Bit): Questo bit viene impostato se si è verificato un riporto nell'ultima operazione matematica, 
                    oppure se il registro A risulta il valore più piccolo quando viene eseguita l'istruzione CP.
        */
        short af;

        short bc;
        short de;

        //
        short hl;
        
        short pc;
        
        //stack pointer
        short sp;

};