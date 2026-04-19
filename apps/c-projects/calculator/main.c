#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>

#define MAX 100

// Get operator precedence
int get_precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}

// Perform basic arithmetic
double calculate(double a, char op, double b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if (b == 0) {
                fprintf(stderr, "Error: Division by zero\n");
                exit(1);
            }
            return a / b;
        default: return 0;
    }
}

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Usage: %s <num> <op> <num> ...\n", argv[0]);
        printf("Example: %s 5 + 3 '*' 2\n", argv[0]);
        return 1;
    }

    double values[MAX];
    char operators[MAX];
    int val_top = -1;
    int op_top = -1;

    // Iterate through CLI arguments starting from index 1
    for (int i = 1; i < argc; i++) {
        char *token = argv[i];

        // If the token starts with a digit, it's a number
        // (Handles negative numbers too if they start with '-')
        if (isdigit(token[0]) || (token[0] == '-' && isdigit(token[1]))) {
            values[++val_top] = atof(token);
        } 
        // Otherwise, it's an operator
        else {
            char current_op = token[0];
            
            while (op_top >= 0 && get_precedence(operators[op_top]) >= get_precedence(current_op)) {
                double val2 = values[val_top--];
                double val1 = values[val_top--];
                char op = operators[op_top--];
                values[++val_top] = calculate(val1, op, val2);
            }
            operators[++op_top] = current_op;
        }
    }

    // Process remaining operators in the stack
    while (op_top >= 0) {
        double val2 = values[val_top--];
        double val1 = values[val_top--];
        char op = operators[op_top--];
        values[++val_top] = calculate(val1, op, val2);
    }

    printf("Result: %.2f\n", values[val_top]);

    return 0;
}
