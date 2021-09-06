import "./styles.css"

function ComProps(props) {
    return (
        <>
            <h2 className="titulo">{ props.titulo }</h2>
            <p>{ props.conteudo }</p>
        </>
    );
}

ComProps.defaultProps = {
    titulo: "Título padrão",
    conteudo: "Conteúdo padrão"
}

export { ComProps }