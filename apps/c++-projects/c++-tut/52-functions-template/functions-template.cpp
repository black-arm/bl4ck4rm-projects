#include <iostream>

template <typename T>
T max(T x, T y){
    return x > y ? x : y;
}

template <typename T, typename U>
auto max_auto(T x, U y){
    return x > y ? x: y;
}

int main() {

    std::cout << max(2.3, 1.89) << std::endl;
    std::cout << max_auto(10, 4.5) << std::endl;

    return 0;
}