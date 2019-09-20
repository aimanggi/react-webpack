import gql  from 'graphql-tag';

const getAllUsersQuery = gql`
    query {
        getAllUsers {
            data {
              name
              email
            }
            error
          }
    }
`

export default getAllUsersQuery;