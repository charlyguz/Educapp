<script setup lang="ts">
import { MockLiveSession } from '~/util/types/mocking/mock-live-session'
import { SPANISH_MESSAGES } from '~/util/constants/time-ago'
import { differenceInMinutes } from '~/util/date';

const { minuteThreshold } = useTutorStore()

const router = useRouter()

const props = defineProps<{
  headers: string[]
  liveSessions: MockLiveSession[]
}>()

const now = new Date()

function inThreshold(date: Date) {
  // console.log(differenceInMinutes(now, date))
  return differenceInMinutes(date, now) < minuteThreshold
}

function formatDate(date: Date) {
  const formattedDate = useDateFormat(date, 'DD-MM-YY').value
  const formatTime = useDateFormat(date, 'HH:mm').value
  return `${formattedDate} a las ${formatTime} (${useTimeAgo(date, {
    messages: SPANISH_MESSAGES,
  }).value.replaceAll('"', '')})`
}

function goMeeting(sessionId: string) {
  router.push(`/tutorias/${encodeURIComponent(sessionId)}`)
}
</script>

<template>
  <div>
    <div class="table-responsive px-2">
      <table class="table table-borderless">
        <thead>
          <tr>
            <th
              v-for="(header, index) in props.headers"
              :key="index"
              scope="col"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="session in props.liveSessions" :key="session.id">
            <td>
              <span class="btn bg-blight btn-link">{{
                session.student.name
              }}</span>
            </td>
            <td>
              <span class="bg-blight">{{
                formatDate(session.scheduledAt)
              }}</span>
            </td>
            <td>
              <span class="bg-blight">{{ session.sessionId }}</span>
            </td>
            <td class="text-center">
              <button
                type="button"
                class="btn btn-outline-primary"
                :disabled="!inThreshold(session.scheduledAt)"
                @click="goMeeting(session.sessionId)"
              >
                <span>Comenzar <i class="bi-arrow-right-short"></i></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
