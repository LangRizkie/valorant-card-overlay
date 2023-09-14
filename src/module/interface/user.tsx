interface userDataCardProps {
  id: string
  small: string
  large: string
  wide: string
}

interface UserDataProps {
  puuid: string
  region: string
  account_level: number
  name: string
  tag: string
  card: userDataCardProps
  last_update: string
  last_update_raw: number
}
export interface UserProps {
  status: number
  data: UserDataProps
}

interface userRankImagesProps {
  small: string
  large: string
  triangle_down: string
  triangle_up: string
}

interface UserRankDataProps {
  name: string
  tag: string
  puuid: string
  current_data: {
    currenttier: number
    currenttierpatched: string
    images: userRankImagesProps
    ranking_in_tier: number
    mmr_change_to_last_game: number
    elo: number
    games_needed_for_rating: number
    old: boolean
  }
  highest_rank: {
    old: boolean
    tier: number
    patched_tier: string
    season: string
  }
}

export interface UserRankProps {
  status: number
  data: UserRankDataProps
}
