import { Message } from '../../common/messages'
import { getUserData, unFollow } from '../insta'

export const onRequestUnfollow = async (
  userId: string,
  sendResponse: (payload: Message) => void
) => {
  const userData = getUserData()
  if (!userData) {
    sendResponse({ id: 'user_not_logged_in' })
    return
  }
  unFollow(userId, userData.appId)
    .then(() => {
      sendResponse({ id: 'request_unfollow_user_success', userId })
    })
    .catch(() => {
      sendResponse({ id: 'request_unfollow_user_fail', userId })
    })
}
