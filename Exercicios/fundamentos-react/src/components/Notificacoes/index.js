export function Notificacoes(props) {
    return (
        <>
            {
                // ? = Só pega as notificações caso tiver alguma
                props.notificacoes?.length > 0 && <p>Você tem {props.notificacoes.length} mensagens não lidas</p>
            }
        </>
    );
}