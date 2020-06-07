import React, { Component } from 'react';
import './Task.scss';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { isComplate: false }
        this.changeIsComplete = this.changeIsComplete.bind(this);
    }
    changeIsComplete(e) {
        let isChecked = e.target.checked;
        if (isChecked) {
            this.setState({ isComplate: true })
        } else {
            this.setState({ isComplate: false })
        }
    }
    render() {
        return (
            <li className={this.state.isComplate ? 'complete' : null}>
                {this.props.task.title}
                <button onClick={this.props.onDelete.bind(this, this.props.task)}>Delete</button>
                <input type="checkbox" onChange={this.changeIsComplete} />
            </li>
        );
    }
}

export default Task;