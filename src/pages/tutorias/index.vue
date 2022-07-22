<script setup lang="ts">
import {
  MockLiveSession,
  useTutorLiveSessionsQuery,
} from '~/generated/operations'

const { loading, onResult } = useTutorLiveSessionsQuery()
const tutorStore = useTutorStore()

onResult((res) => {
  tutorStore.initializeSessions(res.data?.liveSessions as MockLiveSession[])
})

const tableHeaders = [
  'Estudiante',
  'Hora de la sesión',
  'ID de la sesión',
  'Acciones',
]

const schedule = (value: { date: Date; studentId: string }) => {
  if (!(value.date && value.studentId)) return

  tutorStore.scheduleSession(value.date, value.studentId)
}
</script>

<template>
  <!-- Modal -->
  <div
    id="addMentorship"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <add-mentorship-modal
      ref="mentorshipModal"
      @on-date-selected="schedule"
    ></add-mentorship-modal>
  </div>

  <div class="d-flex align-items-center">
    <div class="p-2 flex-grow-1">
      <span class="fs-1">Mis tutorías</span>
    </div>
    <div class="p-2">
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#addMentorship"
      >
        Agendar tutoría
      </button>
    </div>
  </div>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Cargando...</span>
  </div>
  <live-sessions-table
    v-if="tutorStore?.liveSessions"
    :live-sessions="tutorStore.liveSessions"
    :headers="tableHeaders"
  ></live-sessions-table>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
