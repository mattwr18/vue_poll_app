<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { FETCH_RESULTS } from '@/operations/queries'
export default {
  setup() {
    const route = useRoute()
    const { result } = useQuery(FETCH_RESULTS, { id: route.params.id.toString() })
    const question = computed(() => result.value?.fetchQuestion ?? {})
    const pluralizeVotes = (votes: number) => (votes === 1 ? 'vote' : 'votes')
    return {
      question,
      pluralizeVotes,
    }
  },
}
</script>

<template>
  <v-app>
    <v-container max-width="50%">
      <h1>{{ question.questionText }}</h1>
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
