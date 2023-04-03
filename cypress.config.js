const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
      on('before:run', () => {
        console.log('before run 1')
      })
      on('before:run', () => {
        console.log('before run 2')
      })
      // each spec
      on('after:spec', (a) => {
        console.log('after spec 1', a.relative)
      })
      on('after:spec', (a) => {
        console.log('after spec 2', a.relative)
      })
      on('after:spec', (a) => {
        console.log('after spec 3', a.relative)
      })
      // run finished
      on('after:run', () => {
        console.log('after run 1')
      })
      on('after:run', () => {
        console.log('after run 2')
      })
    },
  },
})
