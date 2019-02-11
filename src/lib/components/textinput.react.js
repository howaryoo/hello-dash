import React, { Component } from 'react';

class MyTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'default'
        }
        this.handleInputChange = this.handleInputChange.bind(this); 
    }
    handleInputChange(e) {
        // get the value from the DOM node
        const newValue = e.target.value;
        // update the state!
        this.setState({
            value: newValue
        })
    }
    render() {
        return <div>
            <label>{this.props.label}</label>
            <input value={this.state.value} onChange={this.handleInputChange}/>
            <p>{this.state.value}</p>
        </div>
    }
}


export default MyTextInput;
