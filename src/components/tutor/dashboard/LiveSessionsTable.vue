<script setup lang="ts">
import { Query } from '~/generated/operations'
import { SPANISH_MESSAGES } from '~/util/constants/time-ago'
import { differenceInMinutes } from '~/util/date'

const { minuteThreshold } = useTutorStore()

const router = useRouter()

const props = defineProps<{
  headers: string[]
  liveSessions: Query['liveSessions']
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
        <tbody v-if="props.liveSessions">
          <tr
            v-for="(session, index) in props.liveSessions"
            :key="session?.id || index"
          >
            <template v-if="session && session.student">
              <td>
                <span class="btn bg-blight btn-link">{{
                  session.student.name
                }}</span>
              </td>
              <td>
                <span class="bg-blight">{{
                  formatDate(new Date(session?.scheduledAt!))
                }}</span>
              </td>
              <td>
                <span class="bg-blight">{{ session.sessionId }}</span>
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  :disabled="!inThreshold(new Date(session?.scheduledAt!))"
                  @click="goMeeting(session?.sessionId!)"
                >
                  <span>Comenzar <i class="bi-arrow-right-short"></i></span>
                </button>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
