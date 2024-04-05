import Video from '@/components/Common/Video'
import './style.css'

const MainVideo = () => {
  return (
    <section
      id='home'
      className='flex flex-col items-center justify-center w-full px-16 gap-6'
      style={{ height: 'calc(100vh - 5rem)' }}
    >
      <div className='flow'>
        <div className='flex items-center gap-8'>
          <img src='/svg/sewol-ribbon.svg' />
          <p className='text-white text-[30px] font-semibold'>
             세월호 참사 후 10년, 당신들을 기억하는 마음은 변함 없습니다
          </p>
          <img src='/svg/sewol-ribbon.svg' />
        </div>
      </div>
      <div className='w-full max-w-60xl aspect-video'>
        <Video id='j5sxdl5_hPc' />
      </div>
    </section>
  )
}

export default MainVideo
