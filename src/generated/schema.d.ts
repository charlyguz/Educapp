export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
