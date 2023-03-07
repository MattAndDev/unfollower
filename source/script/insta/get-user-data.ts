import { parseAppId, parseUserId } from './utils'

export const getUserData = () => {
  const userId = parseUserId()
  const appId = parseAppId()
  if (!userId || !appId) return null
  return {
    userId,
    appId,
  }
}
