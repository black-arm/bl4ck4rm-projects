#include <iostream>

int main() {

    //int x = 3.14;

    // double x = (int) 3.14;

    // char x = 101;

    int correct = 8;
    int questions = 10;

    double x = (double) correct / questions * 100;

    std::cout << x << std::endl;

    return 0;
}