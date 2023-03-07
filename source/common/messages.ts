import { InstaUser } from './types'

export type MessageRequestNotFollowBack = {
  id: 'request_not_follow_back'
}

export type MessageRequestNotFollowBackSuccess = {
  id: 'request_not_follow_back_success'
  users: InstaUser[]
}
export type MessageRequestNotFollowBackFail = {
  id: 'request_not_follow_back_fail'
}

export type MessageRequestUnfollowUser = {
  id: 'request_unfollow_user'
  userId: string
}

export type MessageRequestUnfollowUserSuccess = {
  id: 'request_unfollow_user_success'
  userId: string
}

export type MessageRequestUnfollowUserFail = {
  id: 'request_unfollow_user_fail'
  userId: string
}

export type MessageUserNotLoggedIn = {
  id: 'user_not_logged_in'
}

export type MessageRequestLoggedInStatus = {
  id: 'request_logged_in'
}

export type MessageRequestLoggedInStatusSuccess = {
  id: 'request_logged_in_success'
}

export type MessageRequestLoggedInStatusFail = {
  id: 'request_logged_in_fail'
}

export type MessageRequestChangePage = {
  id: 'request_change_page'
  url: string
}

export type MessageRequestChangePageSuccess = {
  id: 'request_change_page_success'
}

export type MessageRequestChangePageFail = {
  id: 'request_change_page_fail'
}

export type Message =
  | MessageRequestNotFollowBack
  | MessageRequestNotFollowBackSuccess
  | MessageRequestNotFollowBackFail
  | MessageRequestUnfollowUser
  | MessageRequestUnfollowUserSuccess
  | MessageRequestUnfollowUserFail
  | MessageUserNotLoggedIn
  | MessageRequestLoggedInStatus
  | MessageRequestLoggedInStatusSuccess
  | MessageRequestLoggedInStatusFail
  | MessageRequestChangePage
  | MessageRequestChangePageSuccess
  | MessageRequestChangePageFail
