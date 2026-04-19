cmake_minimum_required(VERSION 3.10.0)
project(calculator VERSION 0.1.0 LANGUAGES C)

add_executable(calculator main.c operators/operators.c)

include(CTest)
enable_testing()

target_include_directories(calculator PRIVATE ${CMAKE_SOURCE_DIR}/operators)