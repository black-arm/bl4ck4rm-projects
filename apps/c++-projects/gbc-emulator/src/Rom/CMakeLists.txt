add_library(rom_lib Rom.cpp)
target_include_directories(rom_lib PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(rom_lib PUBLIC)