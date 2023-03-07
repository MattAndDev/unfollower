import { getCookie } from 'common'
import { endpointUnfollow } from './utils/endpoints'

export const unFollow = (userId: string, appId: string) => {
  return fetch(endpointUnfollow(userId), {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'x-ig-app-id': appId,
      'x-csrftoken': getCookie('csrftoken')!,
    },
  })
}
