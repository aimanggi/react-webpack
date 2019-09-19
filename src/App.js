import React from 'react';
import ReactDOM from 'react-dom';

// Apollo
// import { ApolloProvider, withApollo } from 'react-apollo';
// import { createUploadLink } from 'apollo-upload-client';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';


// BASE CSS FRAMEWORK
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// THIRD PARTY CSS
// IF ANY WILL GOES HERE 

// CUSTOMIZED CSS
// import './assets/scss/style.scss';

// BASE JS FRAMEWORK
// import 'bootstrap';

// ROUTER
import App from './routers/App';


// CONFIGURE APOLLO CLIENT

// const { APOLLO_SERVICE } = process.env;
// // APOLLO_SERVICE=""
// console.debug(APOLLO_SERVICE);

// const client = new ApolloClient({
//   link: createUploadLink({ uri: APOLLO_SERVICE }),
//   cache: new InMemoryCache(),
// });


/*
 * APP
 */


// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root')
// );

ReactDOM.render(
      <App />,
    document.getElementById('root')
  );
