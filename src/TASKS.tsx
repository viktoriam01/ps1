import React from 'react';
import './TASKS.css'

type TodolistPropsType = {
    data: {
        title: string,
        tasks: Array<TaskType>,
        students: Array<string>
    }
}

type TaskType = {
    taskId: number,
    title: string,
    isDone: boolean
}

export const Todolist = (props:TodolistPropsType) => {
    return (
        <div>
            <h3>{props.data.title}</h3>
            <div>
                <span className='title1'>Name</span>
                <span className='title'>{props.data.tasks[0].title}</span>
                <span className='title'>{props.data.tasks[1].title}</span>
            </div>
            <ul>
                {props.data.students.map(el => {
                    return (
                        <div>
                        <li><span className='title2'>{el}</span>  <input type="checkbox" checked={props.data.tasks[0].isDone}/>
                            <input type="checkbox" checked={props.data.tasks[1].isDone}/>
                        </li>
                        </div>
                    )
                })
                }
            </ul>
        </div>
    )
}