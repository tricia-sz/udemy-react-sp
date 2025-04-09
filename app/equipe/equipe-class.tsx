import { Component } from "react"
import type { EquipeProps } from "../types/equipe"

export class EquipeClass extends Component<EquipeProps> {
    render() {
        return (
            <div>
                <h2>{this.props.nome }</h2>
                <h2>{this.props.idade }</h2>
                <h2>{this.props.funcao }</h2>
            </div>
        )
    }
}