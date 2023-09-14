import CONSTANT from '@/module/constant'
import FETCHER from '@/module/fetcher'
import { NextResponse } from 'next/server'

const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)

  const name = searchParams.get('id')
  const tag = searchParams.get('tag')
  const force = searchParams.get('force')

  const path = `${CONSTANT.URL_ACCOUNT}${name}/${tag}?force=${force}`

  const result = await FETCHER.fetch(path)

  return NextResponse.json(result)
}

export { GET }
