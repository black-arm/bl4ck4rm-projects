#include <iostream>

enum Instructions {
    //Load instruction
    LD,
    LDH,
    //8-bit arithmetic instruction
    ADC,
    ADD,
    CP,
    DEC,
    INC,
    SBC,
    SUB,
    //16-bit arithmetic instruction
    DEC_r16,
    INC_r16,
    ADD_hl_r16,
    AND, 
    CLP,
    OR,
    XOR,
    // bit flag instruction
    BIT,
    RES,
    SET,
    //bit shitf instruction (da vedere questi)
    RL,
    RLA,
    RLC,
    RLCA,
    RR,
    RRCA,
    SLA,
    SRA,
    SRL,
    SWAP,
    //jump and subroutine instruction
    CALL, 
    JP,
    JR,
    RET,
    RST,
    //carry flag instruction
    CCF,
    SCF,
    //Miscellanous instructions
    DAA,
    NOP,
    STOP
};