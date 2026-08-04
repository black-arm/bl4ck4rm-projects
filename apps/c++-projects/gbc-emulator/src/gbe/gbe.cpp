#include "gbe.hpp"
#include "Bus.hpp"
#include "Registers.hpp"
#include "Rom.hpp"
#include <iostream>

GameBoyEmulator::GameBoyEmulator(std::string path){
    this->rom.loadRom(path);
};