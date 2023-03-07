import { render, FunctionComponent } from 'preact'
import { UserList } from './components/user-list/user-list'
import { LoggedInStatus } from './components'
import { useEffect } from 'preact/hooks'
import { chromeStore } from './stores/chrome-store'
import { userStore } from './stores'
import { useSignalEffect } from '@preact/signals'

import './global.css'
import styles from './popup.css'

const App: FunctionComponent = () => {
  useEffect(() => {
    chromeStore.setCurrentTab()
  })
  useSignalEffect(() => {
    if (userStore.isOnInsta.value) {
      userStore.requestIsLoggedIn()
    }
  })
  return (
    <main className={styles.wrap}>
      <LoggedInStatus />
      <UserList />
    </main>
  )
}

render(<App />, document.getElementById('app')!)
