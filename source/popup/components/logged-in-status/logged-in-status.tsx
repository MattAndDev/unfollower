import { userStore } from 'popup/stores/user-store'
import { FunctionalComponent } from 'preact'
import { Text } from 'popup/ui'

export const LoggedInStatus: FunctionalComponent = () => {
  const isOnInsta = userStore.isOnInsta.value
  const isLoggedIn = userStore.loggedIn.value
  if (!isOnInsta) {
    return <Text>This extension only works on instagram</Text>
  }
  return <Text>{isLoggedIn ? 'Logged in' : 'Not logged in'}</Text>
}
