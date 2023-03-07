import { User } from '../user/user'
import { notFollowingStore } from 'popup/stores/not-following-store'

import { userStore } from 'popup/stores'
import { Button, Loader, Text } from 'popup/ui'

import styles from './user-list.css'

export const UserList = () => {
  const users = notFollowingStore.usersNotFollowingBack.value
  if (!userStore.loggedIn.value) return null

  return (
    <>
      <div class={styles.controls}>
        <Button onClick={() => notFollowingStore.requestNotFollowingBack()}>
          {users.length === 0
            ? 'Fetch users not following back'
            : 'Update users not following back'}
        </Button>
        <Button
          onClick={() => {
            chrome.storage.sync.clear()
            notFollowingStore.usersNotFollowingBack.value = []
          }}
        >
          Clear users
        </Button>
      </div>
      {notFollowingStore.usersNotFollowingBackLoading.value && (
        <div class={styles.loading}>
          <Loader />
          <br />
          <Text>Loading users</Text>
        </div>
      )}
      {users.length !== 0 && (
        <ul class={styles.list}>
          {users.map((user) => (
            <li class={styles.item}>
              <User user={user} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
