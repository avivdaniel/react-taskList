import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/AddTaskForm/TaskList/Task';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.onAdd = this.onAdd.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  onAdd(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  deleteTask(taskToDelete) {
    let newTasks = [...this.state.tasks];
    const index = newTasks.indexOf(taskToDelete);
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks
    })
  }
  render() {
    return (
      <div>
        <AddTaskForm onAdd={this.onAdd} />
        <ul>
          {this.state.tasks.map((task, index) => {
            return <Task
              key={index}
              task={task}
              onDelete={this.deleteTask} />
          })}
        </ul>
      </div>
    );
  }
}

export default App;