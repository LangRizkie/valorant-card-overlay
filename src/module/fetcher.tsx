import CONSTANT from './constant'

class FETCHER {
  static fetch = async (
    path: string,
    version = CONSTANT.URL_BASE_VERSION_DEFAULT
  ) => {
    const response = await fetch(CONSTANT.URL_BASE + version + path)
    const result = response.json()

    return result
  }
}

export default FETCHER
