import React, { Component } from 'react';
import demo from '../assets/img/demo.png';
import Child from './Child';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    Hello World !
                </div>
                <div className="image">
                    <img src={demo} alt="demo" />
                </div>
                <Child />
            </div>

        );
    }
}

export default Home;