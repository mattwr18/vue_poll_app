<script lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMutation, useQuery } from '@vue/apollo-composable'
import { FETCH_QUESTION } from '@/operations/queries'
import { VOTE_ON_QUESTION } from '@/operations/mutations'
import router from '@/router'
export default {
  setup() {
    const route = useRoute()
    const questionId = route.params.id.toString()
    const { result, loading, error } = useQuery(FETCH_QUESTION, { id: questionId })
    const question = computed(
      () => result.value?.fetchQuestion ?? { questionText: '', choices: [] },
    )
    const currentVote = ref('')
    const valid = ref(false)
    const voteRules = [
      (value: string) => {
        if (value) {
          valid.value = true
          return valid.value
        }
        return 'You must vote first.'
      },
    ]
    const { mutate: vote, onDone } = useMutation(VOTE_ON_QUESTION)
    const voteOnQuestion = () =>
      valid.value && vote({ questionId, choiceId: currentVote.value.toString() })
    onDone(() => {
      router.push({ name: 'results', params: { id: questionId } })
    })
    return {
      loading,
      question,
      error,
      currentVote,
      voteRules,
      valid,
      voteOnQuestion,
    }
  },
}
</script>

<template>
  <v-app>
    <v-container class="mx-auto pt-16 w-md-50 w-sm-100">
      <v-empty-state
        v-if="loading"
        headline="Loading..."
        title="Grab yourself a hot beverage."
        image="/public/coffee-5009730_1280.png"
      >
      </v-empty-state>
      <v-empty-state
        v-else-if="error"
        headline="Whoops"
        title="Somethings wrong! It's not your fault"
        :text="error.message"
        image="/public/false-2061131_1280.png"
      >
      </v-empty-state>
      <v-form
        @submit.prevent="voteOnQuestion"
        v-model="valid"
        v-else-if="question && question.questionText"
      >
        <h1 class="mb-6">{{ question.questionText }}</h1>
        <v-radio-group v-model="currentVote" :rules="voteRules">
          <v-radio
            v-for="choice in question.choices"
            :key="choice.id"
            :label="choice.choiceText"
            :value="choice.id"
          ></v-radio>
        </v-radio-group>
        <v-btn class="mt-2" type="submit"> Vote </v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>
