#include <iostream>

int main() {

    //dynamic memory = Memory that is allocated after the program is already compiled & running. 
    //                  use the "new" operator to allocate memory in the heap rathen than the stack
    //                  Useful when we don't know how much memory we will need. 

    int *pNum = nullptr;
    pNum = new int;

    *pNum = 21;

    std::cout << pNum << std::endl;
    std::cout << *pNum << std::endl;

    delete pNum;

    return 0;
}