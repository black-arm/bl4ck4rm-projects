#include <iostream>

int main() {

    const double PI = 3.14159;

    // PI = 10.5; non è possibile modificare una variabile costante. 

    double radius = 10;
    double circumference = 2 * PI * radius;

    std::cout << circumference << "cm\n";

    return 0;
}