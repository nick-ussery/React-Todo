import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    tasks: tasks,
    values: '',
  }
  }

  clearCompleted = () =>{
    this.setState({
      tasks: this.state.tasks.filter((task)=>{return task.completed === false})
    })
  }

  toggleCompleted = taskID =>{
    console.log('this was clicked', taskID)
    this.setState({
      tasks: this.state.tasks.map(task =>{
        if(task.id === taskID){
          return{
            ...task,
            completed: !task.completed
          }
        }else{
          return task
        }
      })
    })
  }

  onSubmit = taskName =>{
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })

    this.setState({
      values: ''
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList allTasks={this.state.tasks} toggleCompleted={this.toggleCompleted}/>
        <TodoForm onSubmit={this.onSubmit} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
