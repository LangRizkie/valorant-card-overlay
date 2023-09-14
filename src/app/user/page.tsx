'use client'

import {
  useGetUserDataMutation,
  useGetUserRankMutation
} from '@/module/store/user'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import './style.scss'

const User = () => {
  const searchParams = useSearchParams()
  const [getUserData, userData] = useGetUserDataMutation()
  const [getUserRank, userRank] = useGetUserRankMutation()

  const id = searchParams.get('id')
  const tag = searchParams.get('tag')
  const region = searchParams.get('region')
  const force = true

  const loading =
    userData.isLoading ||
    userRank.isLoading ||
    userData.isUninitialized ||
    userRank.isUninitialized ||
    userData.isError ||
    userRank.isError

  useEffect(() => {
    if (id && tag && region) {
      getUserData({ id, tag, force })
      getUserRank({ id, tag, force, region })
    }
  }, [force, getUserData, getUserRank, id, region, tag])

  if (loading) return <></>

  const data = userData.data && userData.data.data
  const rank = userRank.data && userRank.data.data

  return (
    <>
      {data && rank && (
        <div className='card-container'>
          <div className='card-background'>
            <Image
              src={data.card.wide}
              alt={data.name}
              width={452}
              height={128}
              priority
            />
            <div className='card-content'>
              <Image
                src={rank.current_data.images.large}
                alt={rank.current_data.currenttierpatched}
                width={80}
                height={80}
                priority
              />
            </div>
          </div>
          <div className='card-description'>
            {data.name}#{data.tag}
            <div className='card-detail'>
              <span>elo: {rank.current_data.elo}</span>
              <span>{rank.current_data.ranking_in_tier}/100</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default User
