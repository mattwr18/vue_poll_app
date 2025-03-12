<script lang="ts">
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { FETCH_QUESTIONS } from '@/operations/queries'
import errorImg from '@/assets/false-2061131_1280.png'
import loadingImg from '@/assets/coffee-5009730_1280.png'
export default {
  setup() {
    const { result, loading, error } = useQuery(FETCH_QUESTIONS)
    const questions = computed(() => result.value?.fetchQuestions ?? [])
    return {
      loading,
      loadingImg,
      questions,
      error,
      errorImg,
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
    <v-container v-else-if="questions" class="mx-auto pt-16 w-md-50 w-sm-100">
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
