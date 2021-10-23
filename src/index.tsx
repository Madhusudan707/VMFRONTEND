import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { setContext } from '@apollo/client/link/context';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import './styles/reset.scss';
import './index.scss';
import { ModalCloseProvider, AppContextProvider } from './contexts';
import UserDetailsProvider from './contexts/UserDetails';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import { getItem } from './storage/cookie';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT,
  credentials: 'include',
});

const authLink = setContext((_, { headers }: { headers: any }) => {
  const token = getItem('TOKEN');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache({
    addTypename: false, // remove __typename from the response
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {/* <Provider store={store}> */}

      {/* </Provider> */}
      <UserDetailsProvider>
        {/* <Provider store={store}> */}
        <ModalCloseProvider>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </ModalCloseProvider>
        {/* </Provider> */}
      </UserDetailsProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
