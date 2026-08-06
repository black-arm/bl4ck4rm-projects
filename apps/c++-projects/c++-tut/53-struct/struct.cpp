#include <iostream>

struct student {
    std::string name;
    int age;
    bool enrolled;
};

void print_student(student student1){
    std::cout << student1.name << std::endl;
    std::cout << student1.age << std::endl;
    std::cout << student1.enrolled << std::endl;
}

int main() {

    //struct = A structure that group related variable under one name. d
    //          struct can contain many different data types. 
    //          variables in a struct are called "members"

    student student1;
    student1.name = "Antonio";
    student1.age = 33;
    student1.enrolled = true;

    print_student(student1);

    return 0;
}