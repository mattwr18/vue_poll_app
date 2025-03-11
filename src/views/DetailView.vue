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
    const { result } = useQuery(FETCH_QUESTION, { id: questionId })
    const question = computed(
      () => result.value?.fetchQuestion ?? { questionText: '', choices: [] },
    )
    const currentVote = ref('')
    const voteRules = [
      (value: string) => {
        if (value) return true
        return 'You must vote first.'
      },
    ]
    const { mutate: vote, onDone } = useMutation(VOTE_ON_QUESTION)
    onDone(() => {
      router.push({ name: 'results', params: { id: questionId } })
    })
    return { question, currentVote, voteRules, vote, questionId }
  },
}
</script>

<template>
  <v-app>
    <v-container class="mx-auto pt-16 w-md-50 w-sm-100">
      <v-form @submit.prevent>
        <h1 class="mb-6">{{ question.questionText }}</h1>
        <v-radio-group v-model="currentVote" :rules="voteRules">
          <v-radio
            v-for="choice in question.choices"
            :key="choice.id"
            :label="choice.choiceText"
            :value="choice.id"
          ></v-radio>
        </v-radio-group>
        <v-btn class="mt-2" type="submit" @click="vote({ questionId, choiceId: currentVote })">
          Vote
        </v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>
