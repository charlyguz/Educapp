import { acceptHMRUpdate, defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { MockLiveSession } from '~/generated/operations'
import { randomString } from '~/util/random-string'

// provideApolloClient(defaultApolloClient)

// const

export const useTutorStore = defineStore('tutor', () => {
  /**
   * Current name of the tutor
   */
  const name = ref('Jazmín Martínez')
  // const students = ref<MockStudent[]>([])

  const liveSessions = ref<MockLiveSession[]>([])

  const students = computed(() =>
    liveSessions.value.map((liveSession) => liveSession.student!)
  )

  const sessionIdPrefix = 'educapp-tutoria-'

  liveSessions.value.forEach((session) => {
    session.sessionId = sessionIdPrefix + session.sessionId
  })

  function initializeSessions(fetchedSessions: MockLiveSession[]) {
    fetchedSessions = fetchedSessions.map((session) => {
      return {
        ...session,
        scheduledAt: new Date(session.scheduledAt!),
      }
    })

    liveSessions.value = fetchedSessions
  }

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

  const minuteThreshold = 30

  return {
    name,
    students,
    liveSessions,
    sessionIdPrefix,
    scheduleSession,
    minuteThreshold,
    initializeSessions,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTutorStore, import.meta.hot))
