cmake_minimum_required(VERSION 3.15)
project(gbc-emulator VERSION 1.0.0)  # Nome progetto con trattino

# Standard C++
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Imposta cartella di output
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

# Opzioni di build
option(BUILD_TESTS "Build tests" OFF)

find_package(sdl2 CONFIG REQUIRED)

# File eseguibile principale
add_executable(${PROJECT_NAME} 
    src/main.cpp
)
target_link_libraries(gbc-emulator PRIVATE 
    windows_lib
    rom_lib
)

# target_include_directories(gbc-emulator PRIVATE
#     ${CMAKE_SOURCE_DIR}/src/windows
# )

# Se hai altri file sorgente
# add_executable(${PROJECT_NAME} 
#     src/main.cpp
#     src/cpu.cpp
#     src/memory.cpp
# )

# Imposta gli header
# target_include_directories(${PROJECT_NAME} PRIVATE
#     ${CMAKE_CURRENT_SOURCE_DIR}/src
#     ${CMAKE_CURRENT_SOURCE_DIR}/include
# )

add_subdirectory(src/windows)
add_subdirectory(src/Rom)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)