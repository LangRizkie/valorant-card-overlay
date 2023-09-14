import CONSTANT, { Version } from '@/module/constant'
import FETCHER from '@/module/fetcher'
import { NextResponse } from 'next/server'

const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)

  const name = searchParams.get('id')
  const tag = searchParams.get('tag')
  const region = searchParams.get('region')

  const path = `${CONSTANT.URL_RANK}${region}/${name}/${tag}`

  const result = await FETCHER.fetch(path, Version.v2)

  return NextResponse.json(result)
}

export { GET }
