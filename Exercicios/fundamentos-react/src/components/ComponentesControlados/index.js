import React from "react";

export class ComponentesControlados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            sexo: ""
        }
    }

    // handleNameChange = e => {
    //     this.setState({
    //         nome: e.target.value
    //     });
    // }

    // handleEmailChange = e => {
    //     this.setState({
    //         email: e.target.value
    //     });
    // }

    // handlePasswordChange = e => {
    //     this.setState({
    //         senha: e.target.value
    //     });
    // }

    // handleSexoChange = e => {
    //     this.setState({
    //         sexo: e.target.value
    //     });
    // }

    handleChange = e => {
        const valor = e.target.value
        const nome = e.target.name

        this.setState({
            [nome]: valor
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" onChange={this.handleChange} value={this.state.nome} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                </label>
                <lable>
                    Senha:
                    <input type="password" name="senha" onChange={this.handleChange} value={this.state.senha} />
                </lable>
                <lable>
                    <input type="radio" name="sexo" value="Feminino" onChange={this.handleChange} />
                    Feminino
                </lable>
                <lable>
                    <input type="radio" name="sexo" value="Masculino" onChange={this.handleChange} />
                    Masculino
                </lable>
                <br />
                <button>Enviar</button>
            </form>
        );
    }
}