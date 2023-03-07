import { Message } from 'common/messages'
import { getUserData } from 'script/insta'

export const onRequestLoggedInStatus = (
  sendResponse: (payload: Message) => void
) => {
  const data = getUserData()
  if (!data) {
    sendResponse({ id: 'request_logged_in_fail' })
    return
  }
  sendResponse({ id: 'request_logged_in_success' })
}
