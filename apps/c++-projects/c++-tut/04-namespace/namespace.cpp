#include <iostream>

// Namespace = fornisce una soluzione per prevenire i conflitti in progetti grandi. Ogni entità 
// necessità di un unico nome. Un namespace consente di chiamare entità con lo stesso nome purché i namespace siano 
//differenti.

namespace first {
    int x = 1;
}

namespace second {
    int x = 2;
}

int main() {

    //aggiungere using namespace first; non è una buona pratica perché potrebbe portare a conflitti di nomi. 
    //Se si aggiungesse using namespace first; e using namespace second; allora x sarebbe ambiguo.
    using namespace first;

    //int x = 0;
    //std::cout << x << std::endl;
    std::cout << second::x << std::endl;
    std::cout << x << std::endl;

    using namespace std;

    string hello = "Hello";
    // cout << hello << endl;

    using std::cout;

    cout << "Hello again!" << endl;

    return 0;
}