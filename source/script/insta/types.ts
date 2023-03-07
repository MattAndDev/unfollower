import { InstaUser } from 'common'

export type RelationResponse = {
  users: InstaUser[]
  big_list: boolean
  page_size: number
  groups: unknown[]
  more_groups_available: boolean
  has_more: boolean
  should_limit_list_of_followers: boolean
  status: 'ok' | 'fail' | string
  next_max_id?: string
}
