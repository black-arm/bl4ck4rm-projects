#include <iostream>

void swap(std::string &x, std::string &y);

int main() {

    std::string x = "hello";
    std::string y = "world";

    swap(x, y);

    std::cout << y << " " << x << std::endl;

    return 0;
}

void swap(std::string &x, std::string &y){

    std::string temp; 

    temp = x;
    x = y;
    y = temp;
}