#include <iostream>

int main() {

    std::string name;

    std:: cout << "What is your name? ";
    //  si prendere input fino al primo space
    //std::cin >> name;
    std::getline(std::cin, name); // prende input fino al newline

    std:: cout << "What is your age? ";
    int age;
    std::cin >> age;

    std::cout << "Hello, " << name << "!" << std::endl;
    std::cout << "You are " << age << " years old." << std::endl;

    return 0;
}