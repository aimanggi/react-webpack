import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    onChange = (e, name) => {
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>Hello, {this.state.name}</div>
                <input type="text" value={this.state.name} onChange={(e) => this.onChange(e, 'name')} />
            </div>
        );
    }
}

export default Child;