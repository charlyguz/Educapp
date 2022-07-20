/* eslint-disable no-unused-vars */
import {
  ApolloQueryResult,
  DocumentNode,
  OperationVariables,
} from '@apollo/client'
import {
  UseQueryOptions,
  UseQueryReturn,
} from '@vue/apollo-composable/dist/useQuery'

export function promisifyUseQuery<
  TResult,
  TVariables extends OperationVariables | null | undefined
>(
  query: UseQueryReturn<TResult, TVariables>
): Promise<ApolloQueryResult<TResult>> {
  const { onResult, onError } = query
  return new Promise((resolve, reject) => {
    onResult(resolve)

    onError(reject)
  })
}

export function promisifyUseLazyQuery<TResult = any, TVariables = any>(lazyQuery: {
  load: (
    document?: DocumentNode,
    variables?: TVariables,
    options?: UseQueryOptions
  ) => void
  result: import('vue-demi').Ref<TResult | undefined>
  loading: import('vue-demi').Ref<boolean>
  networkStatus: import('vue-demi').Ref<number | undefined>
  error: import('vue-demi').Ref<
    import('@apollo/client/errors').ApolloError | null
  >
  start: () => void
  stop: () => void
  restart: () => void
  forceDisabled: import('vue-demi').Ref<boolean>
  document: import('vue-demi').Ref<DocumentNode>
  variables: import('vue-demi').Ref<TVariables | undefined>
  options:
    | UseQueryOptions<TResult, TVariables>
    | import('vue-demi').Ref<UseQueryOptions<TResult, TVariables>>
  query: import('vue-demi').Ref<
    | import('@apollo/client/core').ObservableQuery<TResult, TVariables>
    | null
    | undefined
  >
  refetch: (
    variables?: TVariables | undefined
  ) =>
    | Promise<import('@apollo/client/core').ApolloQueryResult<TResult>>
    | undefined
  fetchMore: (
    options: import('@apollo/client/core').FetchMoreQueryOptions<
      TVariables,
      TResult
    > &
      import('@apollo/client/core').FetchMoreOptions<TResult, TVariables>
  ) =>
    | Promise<import('@apollo/client/core').ApolloQueryResult<TResult>>
    | undefined
  subscribeToMore: <
    TSubscriptionVariables = import('@apollo/client/core').OperationVariables,
    TSubscriptionData = TResult
  >(
    options:
      | import('@apollo/client/core').SubscribeToMoreOptions<
          TResult,
          TSubscriptionVariables,
          TSubscriptionData
        >
      | import('vue-demi').Ref<
          import('@apollo/client/core').SubscribeToMoreOptions<
            TResult,
            TSubscriptionVariables,
            TSubscriptionData
          >
        >
      | import('@vue/apollo-composable/dist/util/ReactiveFunction').ReactiveFunction<
          import('@apollo/client/core').SubscribeToMoreOptions<
            TResult,
            TSubscriptionVariables,
            TSubscriptionData
          >
        >
  ) => void
  onResult: (
    fn: (
      param: import('@apollo/client/core').ApolloQueryResult<TResult>
    ) => void
  ) => {
    off: () => void
  }
  onError: (
    fn: (param: import('@apollo/client/errors').ApolloError) => void
  ) => {
    off: () => void
  }
}): (
  document?: DocumentNode,
  variables?: TVariables,
  options?: UseQueryOptions
) => Promise<ApolloQueryResult<TResult>> {
  const { load: lazyQueryLoad, onError, onResult, loading } = lazyQuery

  const load = (
    document?: DocumentNode,
    variables?: TVariables,
    options?: UseQueryOptions
  ) => {
    return new Promise<ApolloQueryResult<TResult>>((resolve, reject) => {
      lazyQueryLoad(document, variables, options)

      onResult((result) => {
        // Wait for data to arrive
        if (!loading.value) {
          resolve(result as ApolloQueryResult<TResult>)
        }
      })

      onError(reject)
    })
  }

  return load
}
