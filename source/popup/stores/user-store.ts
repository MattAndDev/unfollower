import { computed, signal } from '@preact/signals'
import { chromeStore } from './chrome-store'
import {
  MessageRequestLoggedInStatus,
  MessageRequestLoggedInStatusFail,
  MessageRequestLoggedInStatusSuccess,
} from 'common/messages'

export const userStore = (() => {
  const loggedIn = signal<boolean>(false)
  return {
    isOnInsta: computed(() =>
      chromeStore.currentTab.value?.url?.match(/instagram\.com/)
    ),
    requestIsLoggedIn: () => {
      if (!chromeStore.currentTab.value || !chromeStore.currentTab.value.id) {
        loggedIn.value = false
        return false
      }
      return chrome.tabs
        .sendMessage(chromeStore.currentTab.value.id, {
          id: 'request_logged_in',
        } as MessageRequestLoggedInStatus)
        .then(
          (
            message:
              | MessageRequestLoggedInStatusSuccess
              | MessageRequestLoggedInStatusFail
          ) => {
            if (message.id === 'request_logged_in_success') {
              loggedIn.value = true
              return
            }
            loggedIn.value = false
          }
        )
    },
    loggedIn,
  }
})()

export type UserStore = typeof userStore
