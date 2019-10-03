import React from 'react';
import ReactDOM from 'react-dom';

// Apollo
import { ApolloProvider } from 'react-apollo';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';


// BASE CSS FRAMEWORK
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// THIRD PARTY CSS
// IF ANY WILL GOES HERE 

// CUSTOMIZED CSS
import './assets/scss/style.scss';

// BASE JS FRAMEWORK
import 'bootstrap';

// ROUTER
import App from './routers/App';


// CONFIGURE APOLLO CLIENT
const client = new ApolloClient({
  link: createUploadLink({ uri: "https://imp-learning-graphql-server.herokuapp.com/" }),
  cache: new InMemoryCache(),
});


/*
 * APP
 */


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
