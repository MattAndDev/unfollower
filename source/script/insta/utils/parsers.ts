export const parseAppId = () => {
  const appId = document.body.outerHTML.match(/"X-IG-App-ID":"(\d+)"/)
  if (!appId) return null
  return appId[1]
}

export const parseUserId = () => {
  const userId = document.body.outerHTML.match(/appUid":"(\d+)/)
  if (!userId) return null
  return userId[1]
}
