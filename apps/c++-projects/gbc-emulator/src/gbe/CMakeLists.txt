add_library(gbe_lib gbe.cpp)
target_include_directories(gbe_lib PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(gbe_lib PUBLIC 
    rom_lib
    bus_lib
    register_lib
)