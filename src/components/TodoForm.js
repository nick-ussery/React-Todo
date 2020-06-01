import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {values:''}
    }

    handleChanges = e =>{
        e.preventDefault();
        console.log('value', e.target.value)
        this.setState({
            values: e.target.value
        })
    }



    render() { 
        return ( 
            <form>
                <input 
                placeholder='add task here'
                type='text'
                name='tasks'
                value={this.state.value}
                onChange={this.handleChanges}
                />
                <button onClick={(e)=>{
                    e.preventDefault();
                    this.props.onSubmit(this.state.values)}}>Add New Task</button>
                <button onClick={e=>{
                    e.preventDefault();
                    this.props.clearCompleted();
                }}>Clear Completed Tasks</button>
            </form>
         );
    }
}
 
export default TodoForm