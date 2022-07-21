<script setup lang="ts">
import { MockLiveSession } from '~/util/types/mocking/mock-live-session'

const router = useRouter()

const props = defineProps<{
  headers: string[]
  liveSessions: MockLiveSession[]
}>()

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
              <span class="bg-blight">{{ session.scheduledAt }}</span>
            </td>
            <td>
              <span class="bg-blight">{{ session.sessionId }}</span>
            </td>
            <td class="text-center">
              <button type="button" class="btn btn-outline-primary" @click="goMeeting(session.sessionId)">
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
