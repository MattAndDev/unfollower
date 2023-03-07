import { InstaUser } from 'common/types'
import { FunctionalComponent } from 'preact'
import { chromeStore, notFollowingStore } from 'popup/stores'
import { Button } from 'popup/ui'

import styles from './user.css'

export const User: FunctionalComponent<{ user: InstaUser }> = ({ user }) => {
  return (
    <span class={styles.wrap}>
      <a
        class={styles.link}
        title={`${user.username} profile`}
        onClick={() =>
          chromeStore.changePage(`https://www.instagram.com/${user.username}`)
        }
      >
        {user.username}
      </a>
      <Button onClick={() => notFollowingStore.unfollowUser(user.pk)}>
        Unfollow
      </Button>
    </span>
  )
}
