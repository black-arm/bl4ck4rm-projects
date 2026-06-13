#include <iostream>

void printInfo(const std::string &name, const int &age);

int main() {

    std::string name = "Antonio";
    int age = 33;

    printInfo(name, age);

    return 0;
}

void printInfo(const std::string &name, const int &age){
    // ERRORI DI COMPILAZIONE
    // name = " ";
    // age = 0;

    std::cout << name << std::endl;
    std::cout << age << std::endl;
}