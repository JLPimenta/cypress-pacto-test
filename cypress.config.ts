import {defineConfig} from 'cypress'

export default defineConfig({
  e2e: {
      viewportWidth: 1920,
      viewportHeight: 1080,
      defaultCommandTimeout: 10000,
      watchForFileChanges: false,
      numTestsKeptInMemory: 0,
      experimentalMemoryManagement: true,
      specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
  },
})