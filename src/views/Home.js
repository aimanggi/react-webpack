import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import compose  from 'lodash.flowright';
import demo from '../assets/img/demo.png';
import Child from './Child';
import getAllUsersQuery from '../schema/getAllUsersQuery';


class Home extends Component {
    render() {
        console.log(this.props)
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

export default compose(
    graphql(getAllUsersQuery, {
        name: 'users',
        options: () => {
            return {
                fetchPolicy: 'network-only',
                ssr: false,
            }
        }
    }), withApollo
)(Home);
