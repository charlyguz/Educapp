<script setup lang="ts">
import { JitsiMeetExternalApiOptions } from '~/util/types/jitsi'

const { name } = useTutorStore()

const props = defineProps<{
  roomName: string
}>()

const domain = 'meet.jit.si'
const options: JitsiMeetExternalApiOptions = {
  roomName: props.roomName,
  userInfo: {
    displayName: name,
    email: 'email@mail.com'
  },
  configOverwrite: {
    enableNoisyMicDetection: false,
  },
  interfaceConfigOverwrite: {
    SHOW_JITSI_WATERMARK: true,
    SHOW_WATERMARK_FOR_GUESTS: true,
    SHOW_CHROME_EXTENSION_BANNER: false,
  },
}
</script>

<template>
  <div>
    <jitsi-meet
      :domain="domain"
      :options="options"
      class="embedded-jitsi"
    ></jitsi-meet>
  </div>
</template>

<style scoped>
.embedded-jitsi {
  height: 100rem;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
