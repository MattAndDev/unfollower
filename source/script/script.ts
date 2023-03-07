import { Message } from 'common'
import {
  onRequestNotFollowBack,
  onRequestUnfollow,
  onRequestLoggedInStatus,
  onRequestChangePage,
} from './listeners'

chrome.runtime.onMessage.addListener((message: Message, _, sendResponse) => {
  switch (message.id) {
    case 'request_not_follow_back':
      onRequestNotFollowBack(sendResponse)
      break
    case 'request_unfollow_user':
      onRequestUnfollow(message.userId, sendResponse)
      break
    case 'request_logged_in':
      onRequestLoggedInStatus(sendResponse)
      break
    case 'request_change_page':
      onRequestChangePage(message.url, sendResponse)
      break
  }
  return true
})
