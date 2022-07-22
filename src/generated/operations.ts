import { DocumentNode } from 'graphql';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};

export type MockLiveSession = {
  __typename?: 'MockLiveSession';
  id?: Maybe<Scalars['String']>;
  scheduledAt?: Maybe<Scalars['Date']>;
  sessionId?: Maybe<Scalars['String']>;
  student?: Maybe<MockStudent>;
};

export type MockStudent = {
  __typename?: 'MockStudent';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  liveSessions?: Maybe<Array<Maybe<MockLiveSession>>>;
};

export type TutorLiveSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type TutorLiveSessionsQuery = { __typename?: 'Query', liveSessions?: Array<{ __typename?: 'MockLiveSession', id?: string | null, sessionId?: string | null, scheduledAt?: Date | null, student?: { __typename?: 'MockStudent', id?: string | null, name?: string | null } | null } | null> | null };


export const TutorLiveSessionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TutorLiveSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"liveSessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sessionId"}},{"kind":"Field","name":{"kind":"Name","value":"scheduledAt"}},{"kind":"Field","name":{"kind":"Name","value":"student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useTutorLiveSessionsQuery__
 *
 * To run a query within a Vue component, call `useTutorLiveSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTutorLiveSessionsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useTutorLiveSessionsQuery();
 */
export function useTutorLiveSessionsQuery(options: VueApolloComposable.UseQueryOptions<TutorLiveSessionsQuery, TutorLiveSessionsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TutorLiveSessionsQuery, TutorLiveSessionsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TutorLiveSessionsQuery, TutorLiveSessionsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<TutorLiveSessionsQuery, TutorLiveSessionsQueryVariables>(TutorLiveSessionsDocument, {}, options);
}
export function useTutorLiveSessionsLazyQuery(options: VueApolloComposable.UseQueryOptions<TutorLiveSessionsQuery, TutorLiveSessionsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<TutorLiveSessionsQuery, TutorLiveSessionsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<TutorLiveSessionsQuery, TutorLiveSessionsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<TutorLiveSessionsQuery, TutorLiveSessionsQueryVariables>(TutorLiveSessionsDocument, {}, options);
}
export type TutorLiveSessionsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<TutorLiveSessionsQuery, TutorLiveSessionsQueryVariables>;