import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Reorder } from '@material-ui/icons';

class Navbar extends Component {
    render() {
        return (
            <nav className="container">
                <div className="navbar-wrapper">
                    <Grid container justify="space-between">
                        <Grid item xs={6} style={{ fontWeight: 700 }}>
                            Anne Theresa
                    </Grid>
                        <Grid item xs={6} className="navbar-desktop">
                            <Grid container justify="space-between">
                                <Grid item xs="auto">
                                    Home
                            </Grid>
                                <Grid item xs="auto">
                                    About
                            </Grid>
                                <Grid item xs="auto">
                                    Skill
                            </Grid>
                                <Grid item xs="auto">
                                    Portfolio
                            </Grid>
                                <Grid item xs="auto">
                                    Contact
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} className="navbar-mobile">
                            <div className="humburger">
                            <Reorder />
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </nav>
        );
    }
}

export default Navbar;