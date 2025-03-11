/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any }
}

export type ChoiceType = {
  __typename?: 'ChoiceType'
  choiceText: Scalars['String']['output']
  id: Scalars['ID']['output']
  question: QuestionType
  votes: Scalars['Int']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  vote?: Maybe<VoteMutation>
}

export type MutationVoteArgs = {
  choiceId: Scalars['ID']['input']
  questionId: Scalars['ID']['input']
}

export type Query = {
  __typename?: 'Query'
  fetchQuestion?: Maybe<QuestionType>
  fetchQuestions?: Maybe<Array<Maybe<QuestionType>>>
}

export type QueryFetchQuestionArgs = {
  id: Scalars['ID']['input']
}

export type QuestionType = {
  __typename?: 'QuestionType'
  choices: Array<ChoiceType>
  id: Scalars['ID']['output']
  pubDate: Scalars['DateTime']['output']
  questionText: Scalars['String']['output']
}

export type VoteMutation = {
  __typename?: 'VoteMutation'
  choice?: Maybe<ChoiceType>
  question?: Maybe<QuestionType>
}

export type VoteOnQuestionMutationVariables = Exact<{
  questionId: Scalars['ID']['input']
  choiceId: Scalars['ID']['input']
}>

export type VoteOnQuestionMutation = {
  __typename?: 'Mutation'
  vote?: {
    __typename?: 'VoteMutation'
    question?: {
      __typename?: 'QuestionType'
      id: string
      questionText: string
      choices: Array<{ __typename?: 'ChoiceType'; id: string; choiceText: string; votes: number }>
    } | null
  } | null
}

export type FetchQuestionsQueryVariables = Exact<{ [key: string]: never }>

export type FetchQuestionsQuery = {
  __typename?: 'Query'
  fetchQuestions?: Array<{
    __typename?: 'QuestionType'
    id: string
    questionText: string
  } | null> | null
}

export type FetchQuestionQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type FetchQuestionQuery = {
  __typename?: 'Query'
  fetchQuestion?: {
    __typename?: 'QuestionType'
    id: string
    questionText: string
    choices: Array<{ __typename?: 'ChoiceType'; id: string; choiceText: string; votes: number }>
  } | null
}

export const VoteOnQuestionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'VoteOnQuestion' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'questionId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'choiceId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'vote' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'questionId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'questionId' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'choiceId' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'choiceId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'question' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'questionText' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'choices' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'choiceText' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'votes' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VoteOnQuestionMutation, VoteOnQuestionMutationVariables>
export const FetchQuestionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchQuestions' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetchQuestions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'questionText' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchQuestionsQuery, FetchQuestionsQueryVariables>
export const FetchQuestionDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FetchQuestion' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'fetchQuestion' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'questionText' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'choices' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'choiceText' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'votes' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FetchQuestionQuery, FetchQuestionQueryVariables>
