#include <iostream>
#include <fstream>
#include "Rom.hpp"
#include <vector>


std::vector<char> Rom::loadRom(std::string path){

    if(&path == nullptr){
        std::cerr << "path is not defined" << std::endl;
    }

    std::cout << "load rom: " << path << std::endl;

    std::ifstream romFile;
    romFile.open(path, std::ios::binary);
    
    if(!romFile){
        std::cerr << "unable to open file: " + path << std::endl;
        exit(1);
    }

    romFile.seekg(0, std::ios::end);
    u_long size = romFile.tellg();
    romFile.seekg(0, std::ios::beg);

    std::vector<char> data(size);

    romFile.read(data.data(), size);

    romFile.close();

    return data;
}