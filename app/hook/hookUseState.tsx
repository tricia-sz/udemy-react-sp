import { useEffect, useState } from "react"

export default function HookUseState() {
    const [tarefas, setTarefas] = useState([
        "Pagar conta de agua",
        "Estudar React Hooks"
    ])

    const [input, setInput] = useState("")

    useEffect(() => {
        const terefasStorage = localStorage.getItem('tarefas')

        if(terefasStorage) {
            setTarefas(JSON.parse(terefasStorage));
        }

    },[]);

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
        
    },[tarefas]);

    function novaTarefa() {
        setTarefas([...tarefas, input])
        setInput("");
    }

    return (
        <div>
            <ul>
                {tarefas.map((tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                )))}
            </ul>
           <div className="flex gap-4 my-4">
            <input
                type="text"
                className="bg-gray-600 py-2 border-2 border-sky-500"
                value={input}
                onChange={ (e) => setInput(e.target.value)}
                >

                </input>
                <button 
                    className="bg-sky-500 py-2 px-8 rounded-sm" 
                    type="button"
                    onClick={novaTarefa}
                >
                    Nova Tarefa
                </button>
           </div>
        </div>
    )
}
