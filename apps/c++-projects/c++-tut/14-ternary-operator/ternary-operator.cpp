#include <iostream>

int main() {

    bool hungry = true;
    // ternary operator: condition ? expression true : expression false
    // replace if-else statement when assigning a value to a variable.
    hungry ? 
        std::cout << "I'm hungry!" << std::endl : 
        std::cout << "I'm not hungry." << std::endl;

    return 0;
}