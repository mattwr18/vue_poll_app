import { gql } from '../__generated__/gql'

export const FETCH_QUESTIONS = gql(/* GraphQL */ `
  query FetchQuestions {
    fetchQuestions {
      id
      questionText
    }
  }
`)

export const FETCH_QUESTION = gql(/* GraphQL */ `
  query FetchQuestion($id: ID!) {
    fetchQuestion(id: $id) {
      id
      questionText
      choices {
        id
        choiceText
        votes
      }
    }
  }
`)
