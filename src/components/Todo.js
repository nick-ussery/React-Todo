import React from 'react';
const stylingCompleted = {
    border: '1px solid black',
    marginTop: '5px',
    width: '250px',
    textAlign: 'center',
    textDecoration: 'line'
}

const stylingNot = {
    border: '1px solid black',
    marginTop: '5px',
    width: '250px',
    textAlign: 'center'
}


const Todo = task =>{
    console.log('props given to Todo', task)

    if(task.task.completed === true){
        return (
            <div style={stylingCompleted}>
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