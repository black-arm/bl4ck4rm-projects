#include <iostream>

void bakeCake();
void bakeCake(std::string cake);

int main() {

    bakeCake();
    bakeCake("cheesecake");

    return 0;
}

void bakeCake(){
    std::cout << "Bake cake!" << std::endl;
}

void bakeCake(std::string cake){
    std::cout << "Bake " << cake << " cake!" << std::endl;
}