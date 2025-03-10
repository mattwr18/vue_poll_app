/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation Vote($questionId: ID!, $choiceId: ID!) {\n    vote(questionId: $questionId, choiceId: $choiceId) {\n      question {\n        id\n        questionText\n        choices {\n          id\n          choiceText\n          votes\n        }\n      }\n    }\n  }\n": typeof types.VoteDocument,
    "\n  query FetchQuestions {\n    fetchQuestions {\n      id\n      questionText\n    }\n  }\n": typeof types.FetchQuestionsDocument,
    "\n  query FetchQuestion($id: ID!) {\n    fetchQuestion(id: $id) {\n      id\n      questionText\n      choices {\n        id\n        choiceText\n      }\n    }\n  }\n": typeof types.FetchQuestionDocument,
    "\n  query fetchResults($id: ID!) {\n    fetchQuestion(id: $id) {\n      id\n      questionText\n      choices {\n        choiceText\n        votes\n      }\n    }\n  }\n": typeof types.FetchResultsDocument,
};
const documents: Documents = {
    "\n  mutation Vote($questionId: ID!, $choiceId: ID!) {\n    vote(questionId: $questionId, choiceId: $choiceId) {\n      question {\n        id\n        questionText\n        choices {\n          id\n          choiceText\n          votes\n        }\n      }\n    }\n  }\n": types.VoteDocument,
    "\n  query FetchQuestions {\n    fetchQuestions {\n      id\n      questionText\n    }\n  }\n": types.FetchQuestionsDocument,
    "\n  query FetchQuestion($id: ID!) {\n    fetchQuestion(id: $id) {\n      id\n      questionText\n      choices {\n        id\n        choiceText\n      }\n    }\n  }\n": types.FetchQuestionDocument,
    "\n  query fetchResults($id: ID!) {\n    fetchQuestion(id: $id) {\n      id\n      questionText\n      choices {\n        choiceText\n        votes\n      }\n    }\n  }\n": types.FetchResultsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Vote($questionId: ID!, $choiceId: ID!) {\n    vote(questionId: $questionId, choiceId: $choiceId) {\n      question {\n        id\n        questionText\n        choices {\n          id\n          choiceText\n          votes\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Vote($questionId: ID!, $choiceId: ID!) {\n    vote(questionId: $questionId, choiceId: $choiceId) {\n      question {\n        id\n        questionText\n        choices {\n          id\n          choiceText\n          votes\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchQuestions {\n    fetchQuestions {\n      id\n      questionText\n    }\n  }\n"): (typeof documents)["\n  query FetchQuestions {\n    fetchQuestions {\n      id\n      questionText\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FetchQuestion($id: ID!) {\n    fetchQuestion(id: $id) {\n      id\n      questionText\n      choices {\n        id\n        choiceText\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchQuestion($id: ID!) {\n    fetchQuestion(id: $id) {\n      id\n      questionText\n      choices {\n        id\n        choiceText\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query fetchResults($id: ID!) {\n    fetchQuestion(id: $id) {\n      id\n      questionText\n      choices {\n        choiceText\n        votes\n      }\n    }\n  }\n"): (typeof documents)["\n  query fetchResults($id: ID!) {\n    fetchQuestion(id: $id) {\n      id\n      questionText\n      choices {\n        choiceText\n        votes\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;