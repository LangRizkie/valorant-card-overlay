import FUNCTION from '@/module/function'
import { PartialUserRankProps } from '@/module/partial/user'

const LandingResult = ({ data }: { data: PartialUserRankProps }) => {
  const url = `${location.origin}/user?id=${data.id}&tag=${data.tag}&region=${data.region}&force=${data.force}`

  const onCopy = () => FUNCTION.copy(url)

  return (
    <>
      <div className='divider w-96 self-center'>RESULT</div>
      <div className='landing-result'>
        <iframe title='card' src={url} width={452} height={164} />
        <button
          type='button'
          className='btn btn-error mt-8 w-full text-white'
          onClick={onCopy}
        >
          COPY CODE
        </button>
      </div>
    </>
  )
}

export default LandingResult
