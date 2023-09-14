import API from '../api'
import CONSTANT from '../constant'
import { UserProps, UserRankProps } from '../interface/user'
import { PartialUserProps, PartialUserRankProps } from '../partial/user'

const userAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    getUserData: builder.mutation<UserProps, PartialUserProps>({
      query: (query) => ({
        url:
          CONSTANT.HOST_ACCOUNT +
          `?id=${query.id}&tag=${query.tag}&force=${query.force}`,
        method: 'GET'
      })
    }),
    getUserRank: builder.mutation<UserRankProps, PartialUserRankProps>({
      query: (query) => ({
        url:
          CONSTANT.HOST_RANK +
          `?id=${query.id}&tag=${query.tag}&region=${
            query.region || CONSTANT.DEFAULT_REGION
          }`,
        method: 'GET'
      })
    })
  })
})

export const { useGetUserDataMutation, useGetUserRankMutation } = userAPI
