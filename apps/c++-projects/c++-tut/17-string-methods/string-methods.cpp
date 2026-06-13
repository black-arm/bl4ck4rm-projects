#include <iostream>

int main() {

    std::string name;

    std::cout << "get your name: ";
    std::getline(std::cin, name);
    
    std::cout << "length name: " << name.length() << std::endl;
    std::cout << "the string is empty: " << name.empty() << std::endl;

    std::string email = name; //copia del valore non assegnazione della locazione di memoria. 
    email.append("@hotmail.com");

    std::cout << "email is :" << email << std::endl; 

    char a = email.at(7);
    std::cout << a << std::endl;

    name.insert(0, "Hello ");
    std::cout << name << std::endl;

    int pos = name.find(' ');
    std::cout << "space at position: " << pos << std::endl;

    name.erase(0, 5);
    std::cout << name << std::endl;

    name.clear();
    std::cout << "clear string: " << name << std::endl;

    return 0;
}