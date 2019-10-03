import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Navbar extends Component {
    render() {
        return (
            <nav className="container">
                <div className="navbar-wrapper">
                <Grid container justify="space-between">
                    <Grid item lg={4}>
                        <div className="title">
                            Anne Theresa
                        </div>
                    </Grid>
                    <Grid item lg={8}>
                        <Grid container justify="flex-end" spacing={7}>
                            <Grid item lg="auto">
                                Home
                            </Grid>
                            <Grid item lg="auto">
                                About
                            </Grid>
                            <Grid item lg="auto">
                                Skill
                            </Grid>
                            <Grid item lg="auto">
                                Portfolio
                            </Grid>
                            <Grid item lg="auto">
                                Contact
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </div>
                
            </nav>
        );
    }
}

export default Navbar;