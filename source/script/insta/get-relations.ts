import { endpointRelation } from './utils/endpoints'
import { RelationResponse } from './types'
import { InstaUser } from 'common'

export const getRelations = async (
  relationType: 'followers' | 'following',
  userId: string,
  appId: string,
  perPage = 500,
  maxId?: string,
  fetched: InstaUser[] = []
): Promise<InstaUser[]> => {
  return await fetch(endpointRelation(relationType, userId, perPage, maxId), {
    headers: {
      'x-ig-app-id': appId,
    },
  }).then(async (r) => {
    const res: RelationResponse = await r.json()
    if (res.next_max_id) {
      return res.users.concat(
        await getRelations(
          relationType,
          userId,
          appId,
          perPage,
          res.next_max_id,
          fetched
        )
      )
    }
    return res.users ? res.users.concat(fetched) : fetched
  })
}
