// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = props =>{
    console.log('props given to TodoList', props)
 
        return ( 
        <div>
            {
                props.allTasks.map(task =>{
                    return <Todo toggleCompleted={props.toggleCompleted} key={task.id} task={task} />
                })
            }
        </div> );    
}
 
export default TodoList;
