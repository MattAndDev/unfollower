import { signal } from '@preact/signals'
import { MessageRequestChangePage } from 'common/messages'

export const chromeStore = (() => {
  const currentTab = signal<chrome.tabs.Tab | null>(null)
  return {
    currentTab,
    setCurrentTab: () =>
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        currentTab.value = tabs[0]
      }),
    changePage: (url: string) => {
      if (!currentTab.value?.id) return
      chrome.tabs.sendMessage(currentTab.value.id, {
        id: 'request_change_page',
        url,
      } as MessageRequestChangePage)
    },
  }
})()

export type ChromeStore = typeof chromeStore
