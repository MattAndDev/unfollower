import { signal } from '@preact/signals'
import {
  MessageRequestNotFollowBack,
  MessageRequestNotFollowBackSuccess,
  MessageRequestNotFollowBackFail,
  MessageRequestUnfollowUser,
  MessageRequestUnfollowUserSuccess,
  MessageRequestUnfollowUserFail,
} from 'common/messages'
import { InstaUser } from 'common/types'
import { userStore } from './user-store'
import { chromeStore } from './chrome-store'

const USER_STORAGE_KEY = 'usersNotFollowingBack'
export const notFollowingStore = (() => {
  const usersNotFollowingBack = signal<InstaUser[]>([])
  const usersNotFollowingBackLoading = signal<boolean>(false)
  chrome.storage.local.get([USER_STORAGE_KEY]).then((data) => {
    if (data[USER_STORAGE_KEY]) {
      usersNotFollowingBack.value = data[USER_STORAGE_KEY]
    }
  })
  return {
    requestNotFollowingBack: () => {
      if (!userStore.loggedIn.value || !chromeStore.currentTab.value?.id) {
        return
      }
      usersNotFollowingBackLoading.value = true
      return chrome.tabs
        .sendMessage(chromeStore.currentTab.value.id, {
          id: 'request_not_follow_back',
        } as MessageRequestNotFollowBack)
        .then(
          (
            message:
              | MessageRequestNotFollowBackSuccess
              | MessageRequestNotFollowBackFail
          ) => {
            usersNotFollowingBackLoading.value = false
            if (message.id === 'request_not_follow_back_success') {
              usersNotFollowingBack.value = message.users
              chrome.storage.local.set({
                [USER_STORAGE_KEY]: message.users,
              })
              return
            }
            usersNotFollowingBack.value = []
          }
        )
    },
    usersNotFollowingBack,
    usersNotFollowingBackLoading,
    unfollowUser: (userId: number) => {
      if (!userStore.loggedIn.value || !chromeStore.currentTab.value?.id) {
        return
      }
      return chrome.tabs
        .sendMessage(chromeStore.currentTab.value.id, {
          id: 'request_unfollow_user',
          userId: userId.toString(),
        } as MessageRequestUnfollowUser)
        .then(
          (
            message:
              | MessageRequestUnfollowUserSuccess
              | MessageRequestUnfollowUserFail
          ) => {
            if (message.id === 'request_unfollow_user_success') {
              chrome.storage.local.set({
                [USER_STORAGE_KEY]: usersNotFollowingBack.value.filter(
                  ({ pk }) => pk !== userId
                ),
              })
              usersNotFollowingBack.value = usersNotFollowingBack.value.filter(
                ({ pk }) => pk !== userId
              )
              return
            }
            usersNotFollowingBack.value = []
          }
        )
    },
  }
})()

export type NotFollowingStore = typeof notFollowingStore
