<template>
  <jitsi-meet
    ref="jitsiRef"
    domain="meet.jit.si"
    :options="jitsiOptions"
    style="height: 60em"
  ></jitsi-meet>
</template>

<script>
export default defineComponent({
  computed: {
    jitsiOptions() {
      return {
        roomName: 'abcd1234678',
        noSSL: false,
        userInfo: {
          email: 'user@email.com',
          displayName: '',
        },
        configOverwrite: {
          enableNoisyMicDetection: false,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
        },
        onload: this.onIFrameLoad,
      }
    },
  },
  methods: {
    onIFrameLoad() {
      // do stuff
    },
  },
})
</script>
