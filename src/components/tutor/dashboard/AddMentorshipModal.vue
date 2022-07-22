<script setup lang="ts">
import { ref } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const tutorStore = useTutorStore()

const date = ref()
const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'onDateSelected', value: { date: Date; studentId: string }): void
}>()
const studentId = ref('')

const schedule = () => {
  if (!(date.value && studentId.value)) return

  emit('onDateSelected', { date: date.value, studentId: studentId.value })
  date.value = null
  studentId.value = ''
}
</script>

<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 id="exampleModalLabel" class="modal-title">Modal title</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Cerrar"
        ></button>
      </div>
      <div class="modal-body">
        <label for="date">Selecciona fecha y hora</label>
        <Datepicker v-model="date" locale="es-MX"></Datepicker>
        <form action="">
          <label>Escoge a un estudiante</label>
          <select
            v-model="studentId"
            class="form-select"
            aria-label="Escoger estudiante"
          >
            <option
              v-for="(student, index) in tutorStore.students"
              :key="student.id || index"
              :value="student.id"
            >
              {{ student.name }}
            </option>
          </select>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cerrar
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-dismiss="modal"
          @click="schedule()"
        >
          Agendar
        </button>
      </div>
    </div>
  </div>
</template>
