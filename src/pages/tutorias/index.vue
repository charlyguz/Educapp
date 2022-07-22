<script setup lang="ts">
import { useTutorLiveSessionsQuery } from '../../generated/operations'

const { scheduleSession } = useTutorStore()
const { result: data, loading, onResult } = useTutorLiveSessionsQuery()
const { liveSessions: lives } = useTutorStore()

onResult((res) => {
  console.debug(res)
  console.debug(lives)
})

const tableHeaders = [
  'Estudiante',
  'Hora de la sesión',
  'ID de la sesión',
  'Acciones',
]

// const liveSessions = data.value?.liveSessions

const schedule = (value: { date: Date; studentId: string }) => {
  if (!(value.date && value.studentId)) return

  scheduleSession(value.date, value.studentId)
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
    v-if="data?.liveSessions"
    :live-sessions="data.liveSessions"
    :headers="tableHeaders"
  ></live-sessions-table>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
