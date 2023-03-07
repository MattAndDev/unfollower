import { Message } from '../../common/messages'
import { getRelations } from '../insta'
import { getUserData } from '../insta/get-user-data'

export const onRequestNotFollowBack = (
  sendResponse: (payload: Message) => void
) => {
  const userData = getUserData()
  if (!userData) {
    sendResponse({ id: 'user_not_logged_in' })
    return
  }
  Promise.all([
    getRelations('following', userData.userId, userData.appId),
    getRelations('followers', userData.userId, userData.appId),
  ])
    .then(([following, followers]) => {
      sendResponse({
        id: 'request_not_follow_back_success',
        users: following.filter(
          ({ pk }) => !followers.find((f) => f.pk === pk)
        ),
      })
    })
    .catch(() => {
      sendResponse({ id: 'request_not_follow_back_fail' })
    })
}
