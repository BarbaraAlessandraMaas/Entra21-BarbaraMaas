import React from "react";
import { ScrollView, Text } from "react-native";

export function UseCallbackScreen() {
    return (
        <ScrollView>
            {/* <Text>
                Retorna um CALLBACK memoizado.

                Recebe como argumentos um callback e um array. Segue o mesmo estilo do memo,
                em que a cada renderização do componente, todo o código que está nele é executado 
                novamente. As funções são re-declaradas, e uma nova referência (na memória) é 
                alocada para cada função. O useCallback faz com que a função seja redefinida 
                apenas quando necessário, assim mantendo a mesma referência.

                O array de dependências é o que define se o callback será redefinido ou não. Caso 
                haja uma mudança em alguma das dependências, será redefinido.

                const callbackAtualizado = React.useCallback(() => {
                    console.log('callbackAtualizado:', contador);
                }, [contador]);
  
                const callbackNaoAtualizado = React.useCallback(() => {
                    console.log('callbackNaoAtualizado:', contador);
                }, []);
            </Text>   */}
        </ScrollView>
    );
}