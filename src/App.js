import React from 'react';
import ReactDOM from 'react-dom';

// Apollo
// import { ApolloProvider, withApollo } from 'react-apollo';
// import { createUploadLink } from 'apollo-upload-client';
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';


// BASE CSS FRAMEWORK
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// CUSTOMIZED
// import './assets/scss/style.scss';

// THIRD PARTY CSS
// IF ANY WILL GOES HERE 

// BASE JS FRAMEWORK
// import 'jquery';
// import 'bootstrap';

// ROUTER
import AppRouters from './routers/App';


// CONFIGURE APOLLO CLIENT

// const { APOLLO_SERVICE } = process.env;
// // APOLLO_SERVICE="https://staging-dot-apollo-dot-love-nest-233803.appspot.com/"
// console.debug(APOLLO_SERVICE);

// const client = new ApolloClient({
//   link: createUploadLink({ uri: process.env.APOLLO_SERVICE }),
//   cache: new InMemoryCache(),
// });


/*
 * APP
 */
// const RouterWithClient = withApollo(AppRouters);
// const Main = () => {
//   return (
//     <React.Fragment>
//       <MuiThemeProvider theme={theme}>
//         <RouterWithClient />
//       </MuiThemeProvider>
//     </React.Fragment>
//   );
// };

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <Main />
//   </ApolloProvider>,
//   document.getElementById('root')
// );

ReactDOM.render(
      <AppRouters />,
    document.getElementById('root')
  );
