import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import generatedRoutes from '~pages'

import customRoutes from '~/routes'

// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { provideApolloClient } from '@vue/apollo-composable'
import { defaultApolloClient } from './modules/apollo-client'
// Bootstrap js files
// import '@popperjs/core'
// import 'bootstrap'

// Import custom styles
import '/src/styles/global.css'
provideApolloClient(defaultApolloClient)


const routes = setupLayouts(generatedRoutes.concat(customRoutes))

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) =>
      i.install?.(ctx)
    )
  }
)
