#include <iostream>

int main() {

    //pointers = variable that stores a memory address of another variable
    // sometimes it's easier to work with an address

    // & address of operator
    // * deference operator

    std::string name = "Antonio";

    std::string name_value = name; //Passaggio per valore 

    name_value.append(" Basile");

    std::cout << name << std::endl;
    std::cout << name_value << std::endl;

    std::string *name_pointer = &name; //passaggio per puntatore

    name_pointer->append(" Basile");

    std::cout << "name original: " << name << std::endl;
    std::cout << "name pointer address: " << name_pointer << std::endl; // così si visualizza l'indirizzo di memoria
    std::cout << "name pointer value: " << *name_pointer << std::endl; //così si visualizza il valore.


    return 0;
}