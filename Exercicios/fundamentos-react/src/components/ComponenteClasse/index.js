import "./styles.css"
import React from "react";

class ComponenteClasse extends React.Component {
    render() {
        const valor = 20 * 10 / 2;

        return (
            <div className="container-classe">
                <h2>Esse é um componente de classe</h2>
                <p>Um componente pode ter várias tags dentro dele</p>
                <p>O resultado e 20 * 10 / 2 = {valor}</p>
            </div>
        );
    }
}

export {
    ComponenteClasse
}