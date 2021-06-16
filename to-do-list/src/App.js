import React ,{useState} from 'react'
import Task from './task'

function App() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({'taskName':'','time':'','color':''})
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setTask({...task, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(task.taskName && task.time && task.color && isEditing){
            const newTasks = tasks.map((oldtask)=>{
                if(oldtask.id === editId){
                    const{taskName,time,color} = task
                    return {...oldtask,'taskName':taskName,'time':time,'color':color}
                }return oldtask
            })
            setTasks(newTasks)
            setIsEditing(false)
            setEditId(null)
            setTask({'taskName':'','time':'','color':''})
        }
        else if(task.taskName && task.time && task.color){
            const newTask = {...task,id:new Date().getTime().toString()}
            setTasks((tasks)=>[...tasks,newTask])
            setTask({'taskName':'','time':'','color':''})
        }
    }

    const deleteTask = (id) =>{
        const newTasks = tasks.filter((task)=> task.id !== id)
        console.log(newTasks)
        setTasks(newTasks)
    }

    const editTask = (id) =>{
        const targetItem = tasks.find((task)=>task.id === id)
        setIsEditing(true)
        setEditId(id)
        setTask({'taskName':targetItem.taskName,
                'time':targetItem.time,
                'color':targetItem.color})

    }
    return (
        <main>
            <section className="input-container">
                <form className="input-form" onSubmit={handleSubmit}>
                <button type="submit" className="btn ">{isEditing?'Edit Task':'Add Task'}</button>
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
                    const {taskName,time,color,id} = task;
                    return(<Task key={index} 
                    taskName={taskName} 
                    time={time} 
                    color={color} 
                    id={id} 
                    deleteTask={deleteTask}
                    editTask={editTask}
                    />)
                })}
            </section>
        </main>
    )
}

export default App
