import { gql } from '../__generated__/gql'

export const VOTE_ON_QUESTION = gql(/* GraphQL */ `
  mutation Vote($questionId: ID!, $choiceId: ID!) {
    vote(questionId: $questionId, choiceId: $choiceId) {
      question {
        id
        questionText
        choices {
          id
          choiceText
          votes
        }
      }
    }
  }
`)
