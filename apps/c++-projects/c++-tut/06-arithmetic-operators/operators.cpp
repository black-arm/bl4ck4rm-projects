#include <iostream>

int main() {

    int students = 20;

    // students = students + 1; // students = 21
    students += 1; // students = 21
    students++;

    
    std::cout << students << std::endl;

    int chickens = 10;
    chickens = chickens - 1; // chickens = 9
    chickens -= 1; // chickens = 8
    chickens--;

    std::cout << chickens << std::endl;


    int pigs = 5;
    pigs = pigs * 2; // pigs = 10
    pigs *= 2; // pigs = 20

    std::cout << pigs << std::endl;


    int ducks = 18;
    ducks = ducks / 2; // ducks = 9
    ducks /= 2; // ducks = 4 // ducks = 4.5 ma viene troncato a 4 perché è un int
    
    std::cout << ducks << std::endl;



    return 0;
}