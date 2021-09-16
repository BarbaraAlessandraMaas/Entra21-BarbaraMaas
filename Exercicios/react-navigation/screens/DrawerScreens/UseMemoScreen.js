import React from "react";
import { ScrollView, Text } from "react-native";

export function UseMemoScreen() {
    return (
        <ScrollView>
            {/* <Text>
                Retorna um VALOR memoizado.

                Memoização é uma técnica de otimização usada para aumentar o desempenho de 
                sistemas através de armazenar os resultados de funções “caras” e retornar 
                o mesmo resultado quando os mesmos parâmetros forem passados novamente. Nesse
                caso, a memoização evita que seja renderizado várias vezes uma função que
                retorna sempre o mesmo resultado, evitando cálculos desnecessários.

                O useMemo recebe uma função e um array, e só recupera o valor memoizado 
                quando o array receber uma atualização. O useMemo é executado durante a 
                renderização, e não é uma função a ser chamada, mas sim o retorno da função 
                passada para o useMemo.

                const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
            </Text> */}
        </ScrollView>
    );
}