import React, { Component } from 'react';
import './Switch.scss';
class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: true
        };
    }
    toggle() {
        this.setState({
            enabled: !this.state.enabled
        });
    }
    render() {
        return (
            <div className={this.state.enabled ? 'Switch' : 'Switch--disabled'}
                onClick={this.toggle.bind(this)}>
                <div className="handle"></div>
            </div>
        );
    }
}
export default Switch;