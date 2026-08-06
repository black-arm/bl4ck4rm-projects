#include <SDL.h>

class Windows {

    private: 
        SDL_Window* window;
        bool is_running;
        SDL_Renderer* renderer;

    public:
        Windows();
        ~Windows();
        void createWindow();
        void run();
        void close();
};