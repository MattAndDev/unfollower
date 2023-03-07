export const endpointUnfollow = (userId: string) =>
  `https://www.instagram.com/api/v1/web/friendships/${userId}/unfollow/`

export const endpointRelation = (
  relaionType: 'following' | 'followers',
  userId: string,
  perPage = 100,
  maxId?: string
) =>
  `https://www.instagram.com/api/v1/friendships/${userId}/${relaionType}/?count=${perPage}${
    maxId ? `&max_id=${maxId}` : ''
  }`
