class CONSTANT {
  static URL_BASE = process.env.URL_BASE as string
  static URL_BASE_VERSION_DEFAULT = process.env
    .URL_BASE_VERSION_DEFAULT as string

  // third party
  static URL_ACCOUNT = '/account/'
  static URL_RANK = '/mmr/'

  // middleware
  static HOST_API = '/api/'
  static HOST_ACCOUNT = 'user'
  static HOST_RANK = 'user/rank'

  // default
  static DEFAULT_REGION = 'ap'
  static DEFAULT_REGION_LIST = [
    { value: 'ap', name: 'Asia Pacific' },
    { value: 'br', name: 'Brazil' },
    { value: 'eu', name: 'Europe' },
    { value: 'kr', name: 'Korea' },
    { value: 'latam', name: 'Latin America' },
    { value: 'na', name: 'North America' }
  ]
}

export enum Version {
  v1 = 'v1',
  v2 = 'v2'
}

export default CONSTANT
