#include <iostream>
#include <SDL.h>
#include "Windows.hpp"

Windows::Windows(){}
Windows::~Windows(){
    close();
}

void Windows::createWindow(){
    this->window = SDL_CreateWindow( "Game boy emulator", 100, 100, 640, 480, SDL_WINDOW_SHOWN );
    
    if(!this->window){
        std::cout << "Error to create Window object!" << std::endl;
    }

    renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);
    if(!renderer){
        std::cout << "Error to create renderer object!" << std::endl;
    }

    is_running = true;
}

void Windows::run() {
    SDL_Event event;

    while (is_running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) {
                is_running = false;
            }
        }

        // Pulisce lo schermo (colore nero)
        SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
        SDL_RenderClear(renderer);

        // Qui disegnerai il framebuffer della GBC in futuro

        SDL_RenderPresent(renderer);
    }
}

void Windows::close() {
    if (renderer) {
        SDL_DestroyRenderer(renderer);
        renderer = nullptr;
    }
    if (window) {
        SDL_DestroyWindow(window);
        window = nullptr;
    }
    SDL_Quit();
}