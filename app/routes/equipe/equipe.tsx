import React from "react"

export interface EquipeProps {
    nome: string
    idade: number
    funcao: string
}


export default function Equipe(props: EquipeProps) {
        return (
            <div>
                 <h2> Nome: {props.nome}</h2>
                 <h2> Idade: {props.idade}</h2>
                 <h2> Função: {props.funcao}</h2>
            </div>
            
        )
}