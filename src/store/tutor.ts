import { acceptHMRUpdate, defineStore } from 'pinia'
import { MockStudent } from '~/generated/schema'
import { MockLiveSession } from '~/generated/schema'
import { randomString } from '~/util/random-string'
import { v4 as uuidv4 } from 'uuid'
import { provideApolloClient } from '@vue/apollo-composable'
import { defaultApolloClient } from '../modules/apollo-client'

provideApolloClient(defaultApolloClient)

// const 

export const useTutorStore = defineStore('tutor', () => {
  /**
   * Current name of the tutor
   */
  const name = ref('Jazmín Martínez')
  const students = ref<MockStudent[]>([
    {
      id: '7c5832e5-5cc4-4441-a9fa-349b86bcfa08',
      name: 'Yolanda Alcaráz',
    },
    {
      id: '43ae0ed7-8b54-4494-9cad-298784111db7',
      name: 'Roberto García',
    },
  ])

  const liveSessions = ref<MockLiveSession[]>([
    {
      id: uuidv4(),
      sessionId: randomString(),
      scheduledAt: new Date(new Date().getTime() + 29 * 60_000),
      student: {
        id: '7c5832e5-5cc4-4441-a9fa-349b86bcfa08',
        name: 'Yolanda Alcaráz',
      },
    },
    {
      id: uuidv4(),
      sessionId: randomString(),
      scheduledAt: new Date(new Date().getTime() + 120 * 60_000),
      student: {
        id: '43ae0ed7-8b54-4494-9cad-298784111db7',
        name: 'Roberto García',
      },
    },
  ])

  const sessionIdPrefix = 'educapp-tutoria-'

  liveSessions.value.forEach((session) => {
    session.sessionId = sessionIdPrefix + session.sessionId
  })

  function scheduleSession(date: Date, studentId: string) {
    const sessionId = sessionIdPrefix + randomString()
    const existingStudent = students.value.find(
      (student) => student.id === studentId
    )

    liveSessions.value.push({
      id: uuidv4(),
      sessionId,
      scheduledAt: date,
      student: existingStudent!,
    })
  }

  const minuteThreshold = 30;

  return { name, students, liveSessions, sessionIdPrefix, scheduleSession, minuteThreshold }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTutorStore, import.meta.hot))
