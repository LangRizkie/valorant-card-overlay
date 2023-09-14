'use client'

import { useState } from 'react'
import LandingInput from '@/components/landing/input/input'
import LandingResult from '@/components/landing/result/result'
import { PartialUserRankProps } from '@/module/partial/user'

import './style.scss'

const Home = () => {
  const [generate, setGenerate] = useState<boolean>(false)
  const [data, setData] = useState<PartialUserRankProps>({
    id: '',
    tag: '',
    region: '',
    force: true
  })

  const onGenerate = (value: PartialUserRankProps) => {
    setData(value)
    if (value.id && value.tag && value.region) setGenerate(true)
  }

  return (
    <div className='landing-container'>
      <LandingInput onClick={onGenerate} />
      {generate && <LandingResult data={data} />}
    </div>
  )
}

export default Home
