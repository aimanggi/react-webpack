import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
 
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onChange = (e, name) => {
        this.setState({
            [name]: e.target.value
        })
    }

    submitForm = e => {
        e.preventDefault();
        console.log('Submited :', this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={(e) => this.submitForm(e)}>
                {/* <div>Hello, {this.state.name}</div>
                <input type="text" value={this.state.name} onChange={(e) => this.onChange(e, 'name')} /> */}
                <div className="wrapper">
                <Grid container spacing={3}>
                    <Grid item lg={3}>
                    <input type="text" value={this.state.name} placeholder="Name" onChange={(e) => this.onChange(e, 'name')} /> 
                    </Grid>
                    <Grid item lg={3}>
                    <input type="email" value={this.state.email} placeholder="Email" onChange={(e) => this.onChange(e, 'email')} /> 
                    </Grid>
                    <Grid item lg={3}>
                    <input type="password" value={this.state.password} placeholder="Password" onChange={(e) => this.onChange(e, 'password')} /> 
                    </Grid>
                    <Grid item lg={3}>
                    <button type="submit">Sign Up</button>
                    </Grid>
                </Grid>
                </div>
               </form>
            </div>
        );
    }
}

export default Child;