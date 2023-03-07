import { Message } from 'common/messages'

export const onRequestChangePage = (
  url: string,
  sendResponse: (payload: Message) => void
) => {
  window.location.href = url
  sendResponse({ id: 'request_change_page_success' })
}
