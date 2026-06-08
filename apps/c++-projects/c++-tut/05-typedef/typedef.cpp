#include <iostream>
#include <vector>
// typedef = keyword usato per creare un alias per un tipo di dato esistente.
// Usare typedef per creare un alias per un tipo di dato esistente può rendere il codice più leggibile e più facile da mantenere.
// Ad esempio, se si ha un tipo di dato complesso come una struct, è possibile utilizzare typedef per creare un alias più semplice da usare.
// typedef std::vector<std::pair<std::string, int>> pairlist_t;
// typedef std::string text_t;
// typedef int number_t;

//oggi giorno si utilizza più spesso la keyword using per creare alias di tipi, è più semplice da leggere e da scrivere rispetto a typedef.
using pairlist_t = std::vector<std::pair<std::string, int>>;
using text_t = std::string;
using number_t = int;

int main() {

    pairlist_t pairlist;

    text_t name = "John";
    number_t age = 30;



    return 0;
}