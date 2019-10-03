import React, { Component } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

class Base extends Component {
    render() {
        return (
            <div className="layout">
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Base;