export type InstaUser = {
  pk: number
  username: string
  full_name: string
  is_private: boolean
  profile_pic_url: string
  profile_pic_id: string
  is_verified: boolean
  has_anonymous_profile_picture: boolean
  has_highlight_reels: boolean
  account_badges: unknown[]
  similar_user_id: string | null
  latest_reel_media: number
}
