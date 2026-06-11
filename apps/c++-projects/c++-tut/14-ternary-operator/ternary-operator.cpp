#include <iostream>

int main() {

    bool hungry = true;

    hungry ? 
        std::cout << "I'm hungry!" << std::endl : 
        std::cout << "I'm not hungry." << std::endl;

    return 0;
}