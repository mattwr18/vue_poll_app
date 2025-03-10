<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <main>
      <v-container>
        <RouterView v-slot="{ Component }">
          <Transition name="face">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </v-container>
    </main>
  </v-app>
</template>
