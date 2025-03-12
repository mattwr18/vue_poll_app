<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { FETCH_QUESTION } from '@/operations/queries'
import errorImg from '@/assets/false-2061131_1280.png'
import loadingImg from '@/assets/coffee-5009730_1280.png'
export default {
  setup() {
    const route = useRoute()
    const { result, loading, error } = useQuery(FETCH_QUESTION, { id: route.params.id.toString() })
    const question = computed(
      () =>
        result.value?.fetchQuestion ?? {
          questionText: '',
          choices: [{ id: '', votes: 0, choiceText: '' }],
        },
    )
    const pluralizeVotes = (votes: number) => (votes === 1 ? 'vote' : 'votes')
    return {
      loading,
      loadingImg,
      question,
      error,
      errorImg,
      pluralizeVotes,
    }
  },
}
</script>

<template>
  <v-app>
    <v-container v-if="loading || error" class="mx-auto pt-16 w-md-50 w-sm-100">
      <v-empty-state
        v-if="loading"
        headline="Loading..."
        title="Grab yourself a hot beverage."
        :image="loadingImg"
      >
      </v-empty-state>
      <v-empty-state
        v-else-if="error"
        headline="Whoops"
        title="Somethings wrong! It's not your fault"
        :text="error.message"
        :image="errorImg"
      >
      </v-empty-state>
    </v-container>
    <v-container
      v-else-if="question && question.questionText"
      class="mx-auto pt-16 w-md-50 w-sm-100"
    >
      <h1 class="mb-6">{{ question.questionText }}</h1>
      <v-card tag="article">
        <v-list v-if="question && question.choices" tag="ul">
          <v-list-item
            v-for="choice in question.choices"
            :key="choice.id"
            :value="choice.id"
            tag="li"
          >
            {{ choice.choiceText }} -- {{ choice.votes }}
            {{ pluralizeVotes(+choice.votes) }}
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-app>
</template>
