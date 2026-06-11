#include <iostream>
#include <cmath> // per funzioni matematiche


int main() {

    double number = 16.0;

    std::cout << std::max(number, 10.0) << std::endl; // max tra number e 10.0
    std::cout << std::min(number, 10.0) << std::endl; // min tra number e 10.0

    
    std::cout << pow(number, 2) << std::endl; // number elevato alla potenza di 2
    std::cout << sqrt(number) << std::endl; // radice quadrata di number

    std::cout << round(3.14) << std::endl; // arrotonda 3.14 al numero intero più vicino
    std::cout << floor(3.14) << std::endl; // arrotonda 3.14 per difetto
    std::cout << ceil(3.14) << std::endl; // arrotonda 3.14 per eccesso

    std::cout << abs(-5) << std::endl; // valore assoluto di -5

    return 0;
}