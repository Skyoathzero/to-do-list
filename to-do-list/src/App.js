import React ,{useState} from 'react'
import Task from './task'

function App() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({'taskName':'','time':'','color':''})

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setTask({...task, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(task.taskName && task.time && task.color){
            const newTask = {...task,id:new Date().getTime().toString()}
            setTasks((tasks)=>[...tasks,newTask])
            setTask({'taskName':'','time':'','color':''})
        }
    }
    return (
        <main>
            <section className="input-container">
                <form className="input-form" onSubmit={handleSubmit}>
                <button type="submit" className="btn ">Add Task</button>
                    <div className="form-control">
                        <input type="text" 
                        id='taskName'
                        name='taskName'
                        value={task.taskName}
                        onChange={handleChange}
                        placeholder="Task Name"
                        />
                    </div>
                    <div className="form-control">
                        <input type="text" 
                        id='time'
                        name='time'
                        value={task.time}
                        onChange={handleChange}
                        placeholder="Time"/>

                        <input type="text" id='color'
                        name='color'
                        value={task.color}
                        onChange={handleChange}
                        placeholder="Color"/>
                    </div>
                </form>
            </section>
            <section className="list-container">
                {tasks.map((task,index) =>{
                    const {taskName,time,color} = task;
                    return(<Task key={index} taskName={taskName} time={time} color={color} />)
                })}
            </section>
        </main>
    )
}

export default App
