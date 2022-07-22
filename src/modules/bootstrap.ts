import { UserModule } from '~/types'

export const install: UserModule = ({ isClient }) => {
  if (!isClient) return

  import('@popperjs/core')
  import('bootstrap')
}
