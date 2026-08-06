#include <iostream>
#include "Bus.hpp"

Bus::Bus() {}


short Bus::read_byte(short address){

    if(address >= 0 && address <= 0x3FFF){
        /*ROM BANK 0*/
    }else if(0x4000 <= address <= 0x7FFF){
        /*ROM BANK n-1*/
    } else if(0x8000 <= address <= 0x9FFF){
        /* 8kb Video Ram */
    } else if(0xA000 <= address <= 0xBFFF){
        /* 8kb external ram */
    } else if(0xC000 <= address <= 0xCFFF){
        /* 4kb Work RAM*/
    } else if(0xD000 <= address <= 0xDFFF){
        /* 4kb Work RAM */
    } else if(0xE000 <= address <= 0xFDFF) {
        /* Echo RAM, note: Nintendo says don'use this area*/
    } else if(0xFE00 <= address <= 0xFE9F){
        /* Object attribute memory */
    } else if(0xFEA0 <= address <= 0xFEFF){
        /* Not usable, note: Nintendo says don't use this area*/
    } else if(0xFF00 <= address <= 0xFF7F) {
        /* I/O Registers, note: 127 byte*/
    } else if(0xFF80 <= address <= 0xFFFE)  {
        /* High RAM */
    } else if(address == 0xFFFF) {
        //INTERRUPTS
    };

    return 0;
}