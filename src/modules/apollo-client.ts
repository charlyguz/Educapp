import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import { UserModule } from '~/types'

import { DefaultApolloClient } from '@vue/apollo-composable'
import { Auth } from '../generated/operations'

function creatApolloClient() {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: import.meta.env.VITE_API_URL,
  })

  // Cache implementation
  const cache = new InMemoryCache()

  // const authLink = setContext((_, { headers }) => {
  //   // get the authentication token from local storage if it exists
  //   // const token = localStorage.getItem(import.meta.env.VITE_AUTH_TOKEN_LSNAME)
  //   const authData = JSON.parse(
  //     localStorage.getItem(import.meta.env.VVITE_AUTH_TOKEN_LSNAME) || ''
  //   ) as Auth

  //   const token = authData.accessToken

  //   // return the headers to the context so httpLink can read them
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : '',
  //     },
  //   }
  // })

  // Create the apollo client
  return new ApolloClient({
    // link: authLink.concat(httpLink),
    link: httpLink,
    cache,
  })
}

export const defaultApolloClient = creatApolloClient()

export const install: UserModule = ({ app, isClient }) => {
  if (!isClient) return

  app.provide(DefaultApolloClient, defaultApolloClient)
}
