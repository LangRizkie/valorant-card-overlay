export interface PartialUserProps {
  id: string
  tag: string
  force: boolean
}

export interface PartialUserRankProps extends PartialUserProps {
  region: string
}
