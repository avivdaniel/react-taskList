import React, { Component } from 'react';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.taskInput = React.createRef();
    }
    addTask(e) {
        e.preventDefault();
        this.props.onAdd({
            title: this.taskInput.current.value
        }
        );
        e.target.reset();
    }
    render() {
        return (
            <form onSubmit={this.addTask.bind(this)}>
                <input placeholder='your task...' ref={this.taskInput} />
                <button>Add</button>
            </form>
        );
    }
}

export default AddTaskForm;