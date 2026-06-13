#include <iostream>

double pow(double value, int ex);

int main() {

    double square = pow(5, 2);
    double cube = pow(5,3);

    std::cout << square << std::endl;
    std::cout << cube << std::endl;

    return 0;
}

double pow(double value, int ex){
    
    double result = 1.0;
    
    for(int i = 1; i <= ex; i++){
        result *= value;
    }

    return result;
}