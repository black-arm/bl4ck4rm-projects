#include "Rom.hpp"
#include "Bus.hpp"
#include "Registers.hpp"

class GameBoyEmulator {

    public:
        GameBoyEmulator(std::string path);

    private: 
        Rom rom;
        Bus bus;
        Registers registers;
};