import React from 'react'
import {FaRegEdit} from 'react-icons/fa';
import {AiOutlineDelete,AiFillCaretUp,AiFillCaretDown} from 'react-icons/ai';

function Task({taskName,time,color,id,deleteTask,index,editTask,changeListPosition}) {
    return (<>
        <div className="task-object">
            <div className="task">
                <span className="dot" style={{backgroundColor:`${color}`}}></span>
                <h1>{taskName}</h1>
                <p>{time}</p>
            </div>
            <div className="task-btn-container">
                <div className="pos-btn">
                    <button className="pos-up" onClick={() =>{changeListPosition(id,index-1)}}><AiFillCaretUp/></button>
                    <button className="pos-down" onClick={() =>{changeListPosition(id,index+1)}}><AiFillCaretDown/></button>
                </div>
                <button className="edit-btn" onClick={()=>{editTask(id);}}><FaRegEdit/></button>
                <button className="delete-btn" onClick={() =>{deleteTask(id)}}><AiOutlineDelete/></button>
            </div>
        </div>
        
        
        
        </>
    )
}

export default Task
