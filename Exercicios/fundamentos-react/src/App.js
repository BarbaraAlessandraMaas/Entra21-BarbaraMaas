import './App.css';
import { ComponenteFuncional } from "./components/ComponenteFuncional";
import { ComponenteClasse } from "./components/ComponenteClasse";
import { ComProps } from './components/ComProps';
import { Card } from './components/Card';
import { Familia } from './components/Familia';
import { MembroFamilia } from './components/MembroFamilia';
import { ListaAlunos } from './components/ListaAlunos';
import { ManipulandoEventos } from './components/ManipulandoEventos';
import { Relogio } from './components/Relogio';
import { COntador } from './components/Contador';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos de React</h1>
      <div className="cards">
        <Card titulo="JSX" cor="#688C45">
          <h1>Oi</h1>
          <p>Isso é um parágrafo</p>
          <a href="https://www.google.com.br">Isso é um link</a>
        </Card>
        <Card titulo="Componente Funcional" cor="#D97941">
          <ComponenteFuncional />
        </Card>
        <Card titulo="Componente Classe" cor="#A65437">
          <ComponenteClasse />
        </Card>
        <Card titulo="Props" cor="#38403A">
          <ComProps
            titulo="Testando as props"
            conteudo="Isso foi enviado através de uma prop"
          />
          <ComProps />
        </Card>
        <Card titulo="Passando props para os filhos">
          <Familia sobrenome="Silva">
            <MembroFamilia nome="João" />
            <MembroFamilia nome="Pedro" />
            <MembroFamilia nome="Marcos" />
          </Familia>
        </Card>
        <Card titulo="Lista de alunos" cor="#0D0D0D">
          <ListaAlunos />
        </Card>
        <Card titulo="Manipulando Eventos">
          <ManipulandoEventos />
        </Card>
        <Card titulo="Estado">
          <COntador />
        </Card>
        <Card titulo="Estado e ciclos de vida">
          <Relogio />
        </Card>
      </div>
    </div>
  );
}

export default App;
