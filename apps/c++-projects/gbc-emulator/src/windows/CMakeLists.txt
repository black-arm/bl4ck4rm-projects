add_library(windows_lib Windows.cpp)
target_include_directories(windows_lib PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(windows_lib PUBLIC
    SDL2::SDL2
)