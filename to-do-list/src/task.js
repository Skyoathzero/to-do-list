import React from 'react'
import {FaRegEdit} from 'react-icons/fa';
import {AiOutlineDelete} from 'react-icons/ai';

function Task({taskName,time,color,id,deleteTask,editTask}) {
    return (<>
        <div className="task-object">
            <div className="task">
                <h1>{taskName}</h1>
                <p>{time}</p>
                <p>{color}</p>
            </div>
            <div className="task-btn-container">
                <button className="edit-btn" onClick={()=>{editTask(id);}}><FaRegEdit/></button>
                <button className="delete-btn" onClick={() =>{deleteTask(id)}}><AiOutlineDelete/></button>
            </div>
        </div>
        
        
        
        </>
    )
}

export default Task
