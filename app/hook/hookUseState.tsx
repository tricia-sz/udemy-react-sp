import { useCallback, useEffect, useMemo, useState } from "react"

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

    const novaTarefa = useCallback(()  => {
        setTarefas([...tarefas, input])
        setInput("");
    }, [input, setInput]);

    const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

    return (
        <div>
            <ul>
                {tarefas.map((tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                )))}
            </ul>
            <h2 className="text-yellow-600">Você tem {totalTarefas} tarefas</h2>
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
