import React from "react";

export class Relogio extends React.Component {
   //Dispara quando o componente é renderizao pela primeira vez, carrega o estado inicial
    constructor(props) {
        super(props);
        this.state = {
            horario: new Date()
        }
    }

    //Dispara quando o componente é renderizado
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ horario: new Date() })
        }, 1000);
    }

    //Faz a validação se o componente vai atualizar ou não
    shouldComponentUpdate() {
        if (this.state.horario.getSeconds() % 2 == 0) {
            return false;
        }
        return true;
    }

    //Dispara quando o componente for atualizado
    componentDidUpdate() {
        console.log("O estado relógio atualizou");
    }

    //Dispara quando o componente for removido
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <p>Horário atual: {this.state.horario.toLocaleTimeString()}</p>
    }
}