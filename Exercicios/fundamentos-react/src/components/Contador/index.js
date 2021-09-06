import React from "react";

export class COntador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
    }

    incrementar = () => {
        this.setState({ contador: this.state.contador });
    }

    render() {
        return (
            <>
                <h2>Contador: {this.state.contador}</h2>
                <button onClick={incrementar}>+</button>
                <button>-</button>
            </>
        );
    }
}