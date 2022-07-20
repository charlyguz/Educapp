<script setup lang="ts">
import { MockLiveSession } from '~/util/types/mocking/mock-live-session'

const liveSessions: Array<MockLiveSession> = [
  {
    id: '4084e9ce-29c0-455d-a541-2a6c4846d7dc',
    sessionId: 'icw2YCp!Oj',
    scheduledAt: new Date(new Date().getTime() + 30 * 60_000),
    student: {
      id: '7c5832e5-5cc4-4441-a9fa-349b86bcfa08',
      name: 'Yolanda Alcaráz',
    },
  },
  {
    id: '61f91f3b-42b5-45ea-9573-efee9887666d',
    sessionId: '{GeV/MyX(',
    scheduledAt: new Date(new Date().getTime() + 120 * 60_000),
    student: {
      id: '43ae0ed7-8b54-4494-9cad-298784111db7',
      name: 'Roberto García',
    },
  },
]

const sessionIdPrefix = 'educapp-tutoria-'

liveSessions.forEach((session) => {
  session.sessionId = sessionIdPrefix + session.sessionId
})

const tableHeaders = [
  'Estudiante',
  'Hora de la sesión',
  'ID de la sesión',
  'Acciones',
]
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col-10">
        <div class="d-flex align-items-center">
          <div class="p-2 flex-grow-1">
            <span class="fs-1">Mis tutorías</span>
          </div>
          <div class="p-2">
            <button type="button" class="btn btn-success">Agendar tutoría</button>
          </div>
        </div>
        <live-sessions-table
          :live-sessions="liveSessions"
          :headers="tableHeaders"
        ></live-sessions-table>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
