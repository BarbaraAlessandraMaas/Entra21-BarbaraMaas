export function ParOuImpar({ numero }) {
    return (
        <>
            {
                numero % 2 == 0
                    ? <p>O número {numero} é par</p>
                    : <p>O número {numero} é ímpar</p>
            }
        </>
    );

    // if (numero % 2 == 0) {
    //     return <p>O número {numero} é par</p>
    // }

    // return <p>O número {numero} é ímpar</p>
}