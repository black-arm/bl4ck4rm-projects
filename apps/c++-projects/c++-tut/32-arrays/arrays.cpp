#include <iostream>

int main() {

    //Array sono fissi quindi una volta definita la dimensione non si puo ridurre o aumentare.
    //primo modo di definire un array
    // std::string cars[] = { "fiat", "lancia", "Ferrari"};

    //secondo modo di definire un array
    std::string cars[3]; 
    cars[0] = "fiat";
    cars[1] = "lancia";
    cars[2] = "Ferrari";

    std::cout << cars << std::endl; // stampa locazione di memoria dell'array
    std::cout << cars[0] << std::endl;
    std::cout << cars[1] << std::endl;

    cars[2] = "Alfa Romeo";
    std::cout << cars[2] << std::endl;

    return 0;
}