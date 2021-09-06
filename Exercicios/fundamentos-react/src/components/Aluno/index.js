function Aluno(props) {
    return (
        <>
            <h2>Nome: { props.nome }</h2>
            <p>Média: { props.media }</p>
        </>
    );
}

export { Aluno }