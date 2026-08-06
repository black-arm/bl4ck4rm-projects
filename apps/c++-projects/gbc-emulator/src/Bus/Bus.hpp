#include <iostream>
#include <vector>

class Bus {

    private:
        std::vector<char> rom;

    public:
        short read_byte(short address);
        void write_bye(short address, short value);
        void set_rom(std::vector<char> rom);
};