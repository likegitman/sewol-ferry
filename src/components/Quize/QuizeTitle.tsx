import ProgressBar from './ProgressBar'
import Button from '@/components/Common/Button'

interface Props {
  title: string
  question: number
  onClick: () => void
  isShow: boolean
}

const QuizeTitle = ({ question, title, onClick, isShow }: Props) => {
  return (
    <>
      <div className='flex items-center justify-between mb-6'>
        <h3 className='text-lg font-semibold text-white max-w-md'>
          {isShow && '❌ '}
          {question}.{title}
        </h3>

        <div className='space-x-5'>
          <span className='text-white font-medium text-base'>
            <span className='text-[#FDCF00]'>{question}</span>/5
          </span>
          <Button size='sm' onClick={onClick}>
            확인
          </Button>
        </div>
      </div>
      <ProgressBar max={5} current={question} />
    </>
  )
}

export default QuizeTitle
