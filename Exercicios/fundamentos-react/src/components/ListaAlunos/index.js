import { Aluno } from "../Aluno";

const alunos = [
    { id: 1, nome: "João", media: 8 },
    { id: 2, nome: "Pedro", media: 6 },
    { id: 3, nome: "Ana", media: 10 },
    { id: 4, nome: "Joana", media: 8 }
];

function ListaAlunos() {
    return (
        <div>
            {
                alunos.map(aluno => (
                    <Aluno key={aluno.id} nome={aluno.nome} media={aluno.media} />
                ))
            }
        </div>
    );
}

export { ListaAlunos }