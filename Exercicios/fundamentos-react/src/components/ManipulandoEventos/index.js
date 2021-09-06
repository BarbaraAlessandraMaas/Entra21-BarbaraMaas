export function ManipulandoEventos() {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Formulário Enviado");
    }

    function handleMouseOver() {
        document.body.style.backgroundColor = "red";
    }

    function handleMouseLeave() {
        document.body.style.backgroundColor = "white";
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button
                    type="submit"
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >Enviar Formulário</button>
            </form>
        </>
    );
}