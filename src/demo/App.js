/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { MyDashComponent } from '../lib';
import { MyTextInput } from '../lib'

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        var myText = 'Hello Dash!!!'
        console.log(`myText variable: ${myText}`)
        return (
            <div>
                <h1>Hello, Dash, thanks for the tutorial</h1>
                <MyTextInput label='dash-input' />
                <h1 style={{"color": "hotpink", "fontSize": "36px"}}>{myText}</h1>
                <MyDashComponent
                    label = 'abc'
                    setProps={this.setProps}
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
