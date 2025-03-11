<script lang="ts">
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { FETCH_QUESTIONS } from '@/operations/queries'
export default {
  setup() {
    const { result } = useQuery(FETCH_QUESTIONS)
    const questions = computed(() => result.value?.fetchQuestions ?? [])
    return {
      questions,
    }
  },
}
</script>

<template>
  <v-app>
    <v-container class="mx-auto pt-16 w-md-50 w-sm-100">
      <h1 class="mb-6">Poll Questions</h1>
      <v-card tag="article">
        <v-list v-if="questions" tag="ul">
          <v-list-item
            v-for="question in questions"
            :key="question?.id"
            :value="question?.id"
            tag="li"
          >
            <RouterLink :to="{ name: 'details', params: { id: question?.id } }">
              <v-list-item-title>{{ question?.questionText }}</v-list-item-title>
            </RouterLink>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>
  </v-app>
</template>
