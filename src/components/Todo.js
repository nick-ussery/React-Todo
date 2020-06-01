import React from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
const stylingCompleted = {
    border: '1px solid black',
    marginTop: '5px',
    width: '250px',
    textAlign: 'center',
    backgroundColor: 'red'
}

const stylingNot = {
    border: '1px solid black',
    marginTop: '5px',
    width: '250px',
    textAlign: 'center',
    backgroundColor: 'white'
}


const Todo = task =>{
    console.log('props given to Todo', task)

    if(task.task.completed === true){
        return (
            <div style={stylingCompleted} onClick={()=>{task.toggleCompleted(task.task.id)}}>
                {task.task.task}
            </div>
        )
    }else{


        return (
            <div onClick={()=>{task.toggleCompleted(task.task.id)}} style={stylingNot}>
                {task.task.task}
            </div>
    )
    }
}

export default Todo