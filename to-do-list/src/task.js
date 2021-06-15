import React from 'react'

function Task({taskName,time,color}) {
    return (
        <div className="task">
            <h1>{taskName}</h1>
            <p>{time}</p>
            <p>{color}</p>
        </div>
    )
}

export default Task
