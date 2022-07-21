import { JitsiMeetExternalApi } from './JitsiMeetExternalApi'
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    JitsiMeetExternalApi: JitsiMeetExternalApi
  }
}

export { JitsiMeetExternalApi } from './JitsiMeetExternalApi'
export { JitsiMeetExternalApiOptions } from './JitsiMeetExternalApiOptions'
export { default as IJitsiMeetingProps } from './IJitsiMeetingProps'
export { default as IJaaSMeetingProps } from './IJaaSMeetingProps'
export { default as IJitsiMeetExternalApi } from './IJitsiMeetExternalApi'
