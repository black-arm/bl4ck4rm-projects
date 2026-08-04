#include <iostream>
#include "Windows.hpp"
#include "Rom.hpp"

int main(int, char** argv){
    
    Windows windows = Windows();

    Rom rom = Rom();

    rom.loadRom(argv[1]);

    windows.createWindow();
    windows.run();

}
