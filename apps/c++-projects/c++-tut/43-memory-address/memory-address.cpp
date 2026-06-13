#include <iostream>

int main() {

    // memory address = a location of memory where is stored the data. 
    // you can access with & operator. 

    std::string name = "Antonio";
    int age = 33;
    bool student = false;

    std::cout << &name << std::endl;
    std::cout << &age << std::endl;
    std::cout << &student << std::endl;

    return 0;
}