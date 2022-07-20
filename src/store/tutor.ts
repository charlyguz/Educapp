import { acceptHMRUpdate, defineStore } from 'pinia'
import { MockStudent } from '~/util/types/mocking/mock-student'

// const

export const useTutorStore = defineStore('tutor', () => {
  /**
   * Current name of the tutor
   */
  // const name = ref('Simon Meléndez')
  // const students = ref<MockStudent[]>([{

  // }])

  return {}
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTutorStore, import.meta.hot))
