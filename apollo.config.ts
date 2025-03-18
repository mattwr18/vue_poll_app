module.exports = {
  client: {
    service: {
      name: 'vue_poll_app',
      // URL to the GraphQL API
      url: 'http://ec2-3-120-172-41.eu-central-1.compute.amazonaws.com/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.ts'],
  },
}
