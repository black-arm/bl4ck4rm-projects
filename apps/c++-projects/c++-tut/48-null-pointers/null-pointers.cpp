#include <iostream>

int main() {
    //null value = a special value that means something has no value
    // when a pointer is holding a null value, that pointer is not pointing to anything

    //nullptr = keyword represent  a null pointer literal. 
    // nullptr are helpful when determing if an address 
    // was successfully assigned to a pointer

    int *pointer = nullptr;
    int x = 123;

    pointer = &x;

    if(pointer == nullptr){
        std::cout << "Pointer is null" << std::endl;
    } else {
        std::cout << "Pointer is not null" << std::endl;
        std::cout << *pointer << std::endl;
    }


    return 0;
}