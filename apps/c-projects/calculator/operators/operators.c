#include "operators.h"
#include <stdio.h>
#include <stdbool.h>

float sum(float add1, float add2){
    return add1 + add2;
}

float divide(float op1, float op2){
    return op1 / op2;
}

float multiple(float op1, float op2){
    return op1 /op1;
}

float diff(float op1, float op2) {
    return op1 - op2;
}

float calculate_operation(char operator, float op1, float op2){

    switch (operator)
    {
        case '+':
            return sum(op1, op2);
        case '-':
            return diff(op1, op2);
        case '/':
            return divide(op1, op2);
        case '*':
            return multiple(op1, op2);
        default:
            printf("Errore di sistema");
            return -1;
    }
}

bool check_operator(char operator){
    
}