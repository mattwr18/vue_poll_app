import '@mdi/font/css/materialdesignicons.css'
import { createApp, provide, h } from 'vue'

// Apollo Client
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// Vuetify
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(vuetify)
app.use(router)

app.mount('#app')
