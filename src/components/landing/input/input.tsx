import CONSTANT from '@/module/constant'

import './style.scss'
import { useState } from 'react'
import { PartialUserRankProps } from '@/module/partial/user'

const LandingInput = ({ onClick }: { onClick: CallableFunction }) => {
  const [data, setData] = useState<PartialUserRankProps>({
    id: '',
    tag: '',
    region: CONSTANT.DEFAULT_REGION,
    force: true
  })

  return (
    <div className='input-container'>
      <div className='input-wrapper'>
        <div className='input-id-tag'>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>ID</span>
            </label>
            <input
              type='text'
              placeholder='ID'
              className='input w-full max-w-xs'
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
            />
          </div>
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>TAG</span>
            </label>
            <input
              type='text'
              placeholder='TAG'
              className='input w-full max-w-xs'
              value={data.tag}
              onChange={(e) => setData({ ...data, tag: e.target.value })}
            />
          </div>
        </div>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>REGION</span>
          </label>
          <select
            title='region'
            className='select w-full'
            onChange={(e) => setData({ ...data, region: e.target.value })}
          >
            {CONSTANT.DEFAULT_REGION_LIST.map((region, index) => (
              <option
                key={index}
                value={region.value}
                defaultValue={CONSTANT.DEFAULT_REGION}
              >
                {region.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type='button'
          className='btn btn-error mt-8 w-full text-white'
          onClick={() => onClick(data)}
        >
          GENERATE
        </button>
      </div>
    </div>
  )
}

export default LandingInput
