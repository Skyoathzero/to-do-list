import React ,{useState} from 'react'
import Task from './task'

function App() {
    const [tasks, setTasks] = useState(['a','b','c'])
    const [count, setCount] = useState(0)

    const addFromCounter = () => {
        setTasks([...tasks,count])
        setCount((c)=>c+1)
    }
    return (
        <main>
            <section className="input-container">
                <button className="btn" onClick={addFromCounter}>new task</button>
            </section>
            <section className="list-container">
                {tasks.map((task,index) =>{
                    return(<Task key={index}/>)
                })}
            </section>
        </main>
    )
}

export default App
